import { useContext } from "react";
import { ComponentContext } from "../context/ComponentContext";

const useComponent = () => {
  const context = useContext(ComponentContext);
  if (!context) throw Error("Component Context not found");
  return context;
};

export default useComponent;
