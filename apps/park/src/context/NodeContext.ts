import { Dispatch, createContext } from "react";
import { ConnectionGraph } from "../types/ConnectionGraph";
import { Node } from "../types/Node";
import { HighlightMode } from "../types/HighlightMode";
import { NewNodeAction, NodeDetails } from "../types/NewNodeReducer";

interface NodeContextProps {
  connectionGraph: ConnectionGraph;
  currentNode: Node | null;
  highlightMode: HighlightMode;
  editingMode: boolean;
  toggleEditing: () => void;
  toggleHighlightMode: (mode: HighlightMode) => void;
  getNode: (id: string) => Node | null;
  getEdges: (id: string) => string[];
  getIncomingEdges: (id: string) => string[];
  setNode: (id: string | null) => void;
  newNode: NodeDetails;
  updateNode: Dispatch<NewNodeAction>
}
export const NodeContext = createContext<NodeContextProps | null>(null);
