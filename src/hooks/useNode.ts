import { useContext } from "react";
import { NodeContext } from "../context/NodeContext";

export const useNode = () => {
  const context = useContext(NodeContext);
  if (!context) throw Error("Node Context not found");

  return context;
}