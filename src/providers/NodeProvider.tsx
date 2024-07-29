import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { NodeContext } from "../context/NodeContext";
import { ConnectionGraph } from "../types/ConnectionGraph";
import { NewNode, Node } from "../types/Node";
import { nodes } from "../data/Connections";
import { HighlightMode } from "../types/HighlightMode";
import { Action, NewNodeAction, NodeDetails } from "../types/NewNodeReducer";

function NodeProvider(props: PropsWithChildren) {
  const [graph, setGraph] = useState<ConnectionGraph>({
    nodes: nodes,
    edges: [
      ["1", "2"],
      ["1", "3"],
      ["1", "4"],
      ["2", "5"],
      ["5", "1"],
    ],
  });
  const [currentNode, setCurrentNode] = useState<Node | null>(null);
  const [nodeId, setNodeId] = useState<string | null>(null);
  const [highlightMode, setHighLightMode] = useState<HighlightMode>(
    HighlightMode.NONE
  );
  const [editingMode, setEditingMode] = useState(false);

  const edgeMap = graph.edges.reduce((p, c) => {
    const [from, to] = c;
    if (from in p) {
      p[from] = [...p[from], to];
    } else {
      p[from] = [to];
    }

    return p;
  }, {} as { [from: string]: string[] });

  const getNode = useCallback(
    (id: string) => {
      return graph.nodes.find((node) => node.id === id) ?? null;
    },
    [graph.nodes]
  );

  useEffect(() => {
    if (!nodeId) {
      setCurrentNode(null);
    } else {
      const newNode = getNode(nodeId);
      setCurrentNode(newNode);
    }
  }, [nodeId, getNode]);

  const getEdges = (id: string) => {
    return edgeMap[id] ?? [];
  };

  const getIncomingEdges = (id: string) => {
    return Object.keys(edgeMap).filter((node) => edgeMap[node].includes(id));
  };

  const setNode = (id: string | null) => {
    setNodeId(id);
  };

  const toggleHighlightMode = (mode: HighlightMode) => {
    setHighLightMode(mode);
  };

  const toggleEditing = () => {
    setEditingMode((e) => !e);
  };

  const newNodeReducer = (
    state: NodeDetails,
    args: NewNodeAction
  ): NodeDetails => {
    const { action, payload } = args;
    switch (action) {
      case Action.UPDATE_NODE: {
        const node = payload.node ?? state.node;
        return {
          ...state,
          node: node,
        };
      }
      case Action.UPDATE_NEIGHBOUR: {
        return {
          ...state,
          neighbours: payload.neighbours ?? state.neighbours,
        };
      }
      case Action.REFRESH_NEIGHBOUR: {
        const node = payload.node ?? state.node;
        const filterNeighbours = (nodes: string[]) =>
          nodes.map((nId) => getNode(nId)).filter((n) => n !== null) as Node[];
        return {
          ...state,
          neighbours: filterNeighbours(getEdges(node.id)),
          incomingNeighbours: filterNeighbours(getIncomingEdges(node.id)),
        };
      }
      case Action.SUBMIT: {
        return state;
      }
      default:
        return state;
    }
  };

  const [newNode, updateNode] = useReducer(newNodeReducer, {
    node: NewNode(),
    neighbours: [],
    incomingNeighbours: [],
  });

  return (
    <NodeContext.Provider
      value={{
        connectionGraph: graph,
        getNode,
        setNode,
        getEdges,
        currentNode,
        highlightMode,
        toggleHighlightMode,
        getIncomingEdges,
        editingMode,
        toggleEditing,
        newNode,
        updateNode,
      }}
    >
      {props.children}
    </NodeContext.Provider>
  );
}

export default NodeProvider;
