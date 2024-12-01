import { PropsWithChildren, useState } from "react";
import { MasterDataContext } from "../context/MasterDataContext";

function MasterDataProvider(props: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((o) => !o);
  return (
    <MasterDataContext.Provider value={{ open, toggleOpen }}>
      {props.children}
    </MasterDataContext.Provider>
  );
}

export default MasterDataProvider;
