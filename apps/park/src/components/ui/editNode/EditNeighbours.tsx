import { Badge, Card, Checkbox, Grid, Tooltip } from "@mui/joy";
import { useNode } from "../../../hooks/useNode";
import { CheckIcon, CubeIcon } from "@heroicons/react/24/outline";
import { Action } from "../../../types/NewNodeReducer";

function EditNeighbours() {
  const { newNode, connectionGraph, updateNode } = useNode();
  const { node, neighbours } = newNode;
  return (
    <Grid container spacing={1} marginTop={1}>
      {connectionGraph.nodes
        .filter((n) => n.id !== node.id)
        .map((node) => {
          const isChecked = neighbours.map((n) => n.id).includes(node.id);
          return (
            <Grid xs={3}>
              <Tooltip title={node.title}>
                <Card>
                  <Badge
                    sx={{ zIndex: 2 }}
                    size="md"
                    badgeContent={<CheckIcon height={10} />}
                    color="success"
                    invisible={!isChecked}
                  ></Badge>
                  <CubeIcon
                    scale={0.5}
                    style={{ zIndex: 2, pointerEvents: "none" }}
                  />
                  <Checkbox
                    disableIcon
                    overlay
                    variant="plain"
                    checked={isChecked}
                    onChange={() => {
                      if (isChecked) {
                        updateNode({
                          action: Action.UPDATE_NEIGHBOUR,
                          payload: {
                            neighbours: neighbours.filter(
                              (n) => n.id !== node.id
                            ),
                          },
                        });
                      } else {
                        updateNode({
                          action: Action.UPDATE_NEIGHBOUR,
                          payload: { neighbours: [...neighbours, node] },
                        });
                      }
                    }}
                    slotProps={{
                      action: ({ checked }) => ({
                        variant: checked ? "soft" : "plain",
                      }),
                    }}
                  />
                </Card>
              </Tooltip>
            </Grid>
          );
        })}
    </Grid>
  );
}

export default EditNeighbours;
