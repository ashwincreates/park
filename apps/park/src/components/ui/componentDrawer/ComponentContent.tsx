import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { Box, Card, Chip, IconButton, Stack, Typography } from "@mui/joy";
import { useNode } from "../../../hooks/useNode";
import { HighlightMode } from "../../../types/HighlightMode";

function ComponentContent() {
  const { currentNode, setNode, getEdges, getNode, getIncomingEdges } =
    useNode();
  return (
    <Box sx={{ overflowX: "auto" }}>
      <Stack gap={0.5}>
        {currentNode &&
          getEdges(currentNode.id).map((id) => {
            const node = getNode(id);
            return (
              <Card>
                <Stack direction="row" justifyContent="space-between">
                  <Stack>
                    <Typography alignSelf="center">{node?.title}</Typography>
                    <Chip size="sm" variant="outlined">
                      {HighlightMode.OUTGOING}
                    </Chip>
                  </Stack>
                  <IconButton onClick={() => setNode(node?.id as string)}>
                    <ChevronDoubleRightIcon height={16} />
                  </IconButton>
                </Stack>
              </Card>
            );
          })}
        {currentNode &&
          getIncomingEdges(currentNode.id).map((id) => {
            const node = getNode(id);
            return (
              <Card>
                <Stack direction="row" justifyContent="space-between">
                  <Stack>
                    <Typography alignSelf="center">{node?.title}</Typography>
                    <Chip size="sm" variant="outlined">
                      {HighlightMode.INCOMING}
                    </Chip>
                  </Stack>
                  <IconButton onClick={() => setNode(node?.id as string)}>
                    <ChevronDoubleRightIcon height={16} />
                  </IconButton>
                </Stack>
              </Card>
            );
          })}
      </Stack>
    </Box>
  );
}

export default ComponentContent;
