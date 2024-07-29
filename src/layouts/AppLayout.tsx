import { Stack } from "@mui/joy";
import Header from "../components/app/Header";
import { PropsWithChildren } from "react";

function AppLayout(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <Stack direction="row" height="calc(100% - 49px)" position={"relative"} overflow={'hidden'}>
        {props.children}
      </Stack>
    </>
  );
}

export default AppLayout;
