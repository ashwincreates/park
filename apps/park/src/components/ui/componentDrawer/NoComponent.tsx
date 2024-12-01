import { Card, IconButton, Stack, Typography } from "@mui/joy";
import useComponent from "../../../hooks/useComponent";
import { XMarkIcon } from "@heroicons/react/24/solid";

function NoComponent() {
  const { toggleComponentNav } = useComponent();
  return (
    <Card>
      <Stack direction="row" justifyContent="space-between">
        <Typography alignSelf="center">No Component Selected</Typography>
        <IconButton onClick={() => toggleComponentNav()}>
          <XMarkIcon height={16} />
        </IconButton>
      </Stack>
    </Card>
  );
}

export default NoComponent;
