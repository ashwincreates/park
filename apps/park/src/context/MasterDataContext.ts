import { createContext } from "react";

interface MasterDataContextProps {
  open: boolean;
  toggleOpen: () => void;
}
export const MasterDataContext = createContext<MasterDataContextProps | null>(
  null
);
