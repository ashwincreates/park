import { Node } from "../types/Node";
import { NodeType } from "../types/NodeType";

export const nodes: Node[] = [
  {
    id: "1",
    title: "1st Connection",
    description: "first connection",
    type: NodeType.Cloud,
    metadata: {
      position: [1, 0, 1],
    },
  },
  {
    id: "2",
    title: "2nd Connection",
    description: "second connection",
    type: NodeType.Cloud,
    metadata: {
      position: [6, 0, -5],
    },
  },
  {
    id: "3",
    title: "3rd Connection",
    description: "third connection",
    type: NodeType.Cloud,
    metadata: {
      position: [8, 0, -2],
    },
  },
  {
    id: "4",
    title: "4th Connection",
    description: "fourth connection",
    type: NodeType.Cloud,
    metadata: {
      position: [5, 0, 5],
    },
  },
  {
    id: "5",
    title: "5th Connection",
    description: "fifth connection",
    type: NodeType.Cloud,
    metadata: {
      position: [4, 0, -5],
    },
  },
];
