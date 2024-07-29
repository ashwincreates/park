import { Bars3Icon } from "@heroicons/react/20/solid";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  IconButton,
  Option,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/joy";
import { useRenderManager } from "../../hooks/useRenderManager";

interface HeaderProps {
  toggleNav?: () => void;
}
function Header({ toggleNav }: HeaderProps) {
  const { mode, toggleMode } = useRenderManager();
  return (
    <Container sx={{ height: 48 }} disableGutters maxWidth='xl'>
      <Stack
        paddingX={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        {/* AppName and Logo */}
        <Stack direction="row" gap={2}>
          <IconButton
            sx={{ display: { sm: "none" } }}
            onClick={() => toggleNav?.()}
          >
            <Bars3Icon height={20} />
          </IconButton>
          <Typography level="title-md">AppLand</Typography>
        </Stack>
        {/* Middle Actions */}
        <Stack direction="row" gap={2}>
          <Select defaultValue={"driscolls"} variant="outlined" size="sm">
            <Option value={"driscolls"}>Driscolls</Option>
            <Option value={"research"}>Research & Development</Option>
            <Option value={"nursery"}>Nursery</Option>
          </Select>
          <FormControl orientation="horizontal">
            <FormLabel>{mode}</FormLabel>
            <Switch
              size="lg"
              color={mode === "2D" ? "neutral" : "primary"}
              onClick={toggleMode}
            >
              {mode}
            </Switch>
          </FormControl>
        </Stack>
        {/* End Actions */}
        <Stack direction="row">
          <Button
            variant="outlined"
          >
            Go VR!
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Header;
