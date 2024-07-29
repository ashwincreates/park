import { createContext } from "react";

interface ComponentContextProps {
  openNav: boolean;
  openInfo: boolean;
  toggleInfoDrawer: () => void;
  toggleComponentNav: () => void;
}
export const ComponentContext = createContext<ComponentContextProps | null>(
  null
);
