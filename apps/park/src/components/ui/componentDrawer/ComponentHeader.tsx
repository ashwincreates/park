import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  ToggleButtonGroup,
  Typography,
} from "@mui/joy";
import useComponent from "../../../hooks/useComponent";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useNode } from "../../../hooks/useNode";
import { HighlightMode } from "../../../types/HighlightMode";

function ComponentHeader() {
  const { toggleComponentNav, toggleInfoDrawer, openInfo } = useComponent();
  const { currentNode, highlightMode, toggleHighlightMode } = useNode();
  return (
    <Card
      size="sm"
      sx={{
        marginBottom: 1,
        top: 0,
      }}
    >
      <Stack
        direction="row"
        alignContent="center"
        justifyContent="space-between"
      >
        <Stack direction="row" gap={1}>
          <Typography alignSelf="center" level="title-lg">
            {currentNode?.title}
          </Typography>
        </Stack>
        <IconButton onClick={() => toggleComponentNav()}>
          <XMarkIcon height={16} />
        </IconButton>
      </Stack>
      <CardContent>{currentNode?.description}</CardContent>
      <CardActions orientation="horizontal-reverse">
        <ToggleButtonGroup>
          <IconButton
            onClick={() => toggleInfoDrawer()}
            color={openInfo ? "primary" : "neutral"}
          >
            <InformationCircleIcon height={16} />
          </IconButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value={highlightMode}>
          <IconButton
            value={HighlightMode.INCOMING}
            onClick={() => {
              if (highlightMode === HighlightMode.INCOMING) {
                toggleHighlightMode(HighlightMode.NONE);
              } else {
                toggleHighlightMode(HighlightMode.INCOMING);
              }
            }}
          >
            <ArrowsPointingInIcon height={16} />
          </IconButton>
          <IconButton
            value={HighlightMode.OUTGOING}
            onClick={() => {
              if (highlightMode === HighlightMode.OUTGOING) {
                toggleHighlightMode(HighlightMode.NONE);
              } else {
                toggleHighlightMode(HighlightMode.OUTGOING);
              }
            }}
          >
            <ArrowsPointingOutIcon height={16} />
          </IconButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup>
          <IconButton>
            <PencilIcon height={16} />
          </IconButton>
          <IconButton>
            <PlusIcon height={16} />
          </IconButton>
          <IconButton color="danger">
            <TrashIcon height={16} />
          </IconButton>
        </ToggleButtonGroup>
      </CardActions>
    </Card>
  );
}

export default ComponentHeader;
