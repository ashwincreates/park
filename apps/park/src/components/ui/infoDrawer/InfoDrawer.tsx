import {
  Card,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import useComponent from "../../../hooks/useComponent";
import { XMarkIcon } from "@heroicons/react/24/solid";

function InfoDrawer() {
  const theme = useTheme();
  const { openInfo, toggleInfoDrawer } = useComponent();
  return (
    <Drawer
      open={openInfo}
      size={"md"}
      anchor={"right"}
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
            right: 16,
            bottom: 16,
            left: "unset",
            background: "transparent",
            boxShadow: "none",
            pointerEvents: "all",
          },
        },
      }}
    >
      <Card>
        <Stack
          direction="row"
          alignContent="center"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={1}>
            <Typography alignSelf="center" level="title-lg">
              Hello
            </Typography>
          </Stack>
          <IconButton onClick={() => toggleInfoDrawer()}>
            <XMarkIcon height={16} />
          </IconButton>
        </Stack>
      </Card>
    </Drawer>
  );
}

export default InfoDrawer;
