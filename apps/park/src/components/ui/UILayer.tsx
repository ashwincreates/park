import {
  CircleStackIcon,
  CubeIcon,
  MapIcon,
} from "@heroicons/react/24/solid";
import { IconButton, Stack } from "@mui/joy";
import useComponent from "../../hooks/useComponent";
import useMasterData from "../../hooks/useMasterData";
import { useNode } from "../../hooks/useNode";

function UILayer() {
  const { editingMode, toggleEditing } = useNode();
  const { openNav, toggleComponentNav } = useComponent();
  const { open, toggleOpen } = useMasterData();
  return (
    <Stack
      display={openNav || open ? "none" : "flex"}
      sx={{ position: "absolute", top: 16, left: 16 }}
      gap={2}
    >
      <IconButton variant="soft" onClick={() => toggleComponentNav()}>
        <MapIcon height={16} />
      </IconButton>
      <IconButton variant="soft" onClick={() => toggleOpen()}>
        <CircleStackIcon height={16} />
      </IconButton>
      <IconButton
        variant="soft"
        color={editingMode ? "primary" : "neutral"}
        onClick={() => toggleEditing()}
      >
        <CubeIcon height={16} />
      </IconButton>
    </Stack>
  );
}

export default UILayer;
