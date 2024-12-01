import { Drawer } from "@mui/joy";
import { PropsWithChildren } from "react";

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
}
function NavDrawer({
  open,
  onClose,
  children,
}: PropsWithChildren<NavDrawerProps>) {
  return (
    <Drawer open={open} onClose={() => onClose()}>
      {children}
    </Drawer>
  );
}

export default NavDrawer;
