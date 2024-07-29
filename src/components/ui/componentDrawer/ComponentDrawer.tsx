import { Drawer, useTheme } from "@mui/joy";
import useComponent from "../../../hooks/useComponent";
import ComponentHeader from "./ComponentHeader";
import ComponentContent from "./ComponentContent";
import { useNode } from "../../../hooks/useNode";
import NoComponent from "./NoComponent";

function ComponentDrawer() {
  const theme = useTheme();
  const { currentNode } = useNode();
  const { openNav } = useComponent();
  return (
    <Drawer
      open={openNav}
      size={"sm"}
      hideBackdrop={true}
      disablePortal={true}
      slotProps={{
        root: {
          sx: {
            position: "absolute",
            pointerEvents: "none",
          },
        },
        content: {
          sx: {
            position: "absolute",
            height: "calc(100% - 32px)",
            borderRadius: theme.radius.sm,
            top: 16,
            left: 16,
            bottom: 16,
            background: "transparent",
            boxShadow: "none",
            pointerEvents: "all",
          },
        },
      }}
    >
      {currentNode ? <ComponentHeader /> : <NoComponent />}
      <ComponentContent />
    </Drawer>
  );
}

export default ComponentDrawer;
