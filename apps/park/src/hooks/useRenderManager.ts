import { useContext } from "react";
import { RenderContext } from "../context/RenderContext";

export const useRenderManager = () => {
  const context = useContext(RenderContext);

  if (!context) throw Error("Context not found");

  return context;
};
