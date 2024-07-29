import { useEffect } from "react";
import { useNode } from "../../hooks/useNode";
import SObject from "./Object";
import { NewNode } from "../../types/Node";
import Connector from "./Connector";
import { Action } from "../../types/NewNodeReducer";

function NewNodeRenderer() {
  const { currentNode, editingMode, newNode, updateNode } = useNode();
  const { node, neighbours, incomingNeighbours } = newNode;

  useEffect(() => {
    if (currentNode) {
      updateNode({
        action: Action.UPDATE_NODE,
        payload: { node: currentNode },
      });
      updateNode({ action: Action.REFRESH_NEIGHBOUR, payload: {} });
    }
  }, [currentNode, editingMode]);

  useEffect(() => {
    if (!editingMode && !currentNode) {
      updateNode({ action: Action.UPDATE_NODE, payload: { node: NewNode() } });
      updateNode({ action: Action.REFRESH_NEIGHBOUR, payload: {} });
    }
  }, [editingMode, currentNode]);

  return (
    editingMode && (
      <>
        <SObject
          id={node.id}
          position={node.metadata.position}
          onPositionChange={(p) => {
            updateNode({
              action: Action.UPDATE_NODE,
              payload: { node: { ...node, metadata: { position: p } } },
            });
          }}
          draggable={true}
          transparent={true}
          opacity={0.7}
        />
        {neighbours.map((n) => {
          const [x, y, z] = node.metadata.position;
          return (
            <Connector
              highlight
              dashed
              start={[x, y - 0.5, z]}
              end={[
                n.metadata.position[0],
                n.metadata.position[1] - 0.5,
                n.metadata.position[2],
              ]}
            />
          );
        })}
        {incomingNeighbours.map((n) => {
          const [x, y, z] = node.metadata.position;
          return (
            <Connector
              start={[x, y - 0.5, z]}
              end={[
                n.metadata.position[0],
                n.metadata.position[1] - 0.5,
                n.metadata.position[2],
              ]}
            />
          );
        })}
      </>
    )
  );
}

export default NewNodeRenderer;
