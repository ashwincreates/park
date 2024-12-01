import { NodeMetaData } from "./NodeMetadata";
import { NodeType } from "./NodeType";

export type Node = {
  id: string;
  title: string;
  description: string;
  type: NodeType;
  metadata: NodeMetaData;
};

export function NewNode(position?: [x: number, y: number, z: number]): Node {
  return {
    id: "",
    title: "",
    description: "",
    type: NodeType.Cloud,
    metadata: {
      position: position ?? [0, 0, 0],
    },
  };
}
