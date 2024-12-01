import { Box } from "@mui/joy";

function SideBar() {
  return (
    <Box
      borderRight={1}
      borderColor={(theme) => theme.palette.divider}
      height="100%"
      width="200px"
    >
    </Box>
  );
}

export default SideBar;
