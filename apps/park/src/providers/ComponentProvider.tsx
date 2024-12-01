import { PropsWithChildren, useState } from "react";
import { ComponentContext } from "../context/ComponentContext";

function ComponentProvider(props: PropsWithChildren) {
  const [openNav, setOpenNav] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const toggleComponentNav = () => setOpenNav((o) => !o);

  const toggleInfoDrawer = () => setOpenInfo((o) => !o);

  return (
    <ComponentContext.Provider
      value={{ openNav, toggleComponentNav, toggleInfoDrawer, openInfo }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
}

export default ComponentProvider;
