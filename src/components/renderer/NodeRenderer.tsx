import { Text } from "@react-three/drei";
import SObject from "./Object";
import { useThree } from "@react-three/fiber";
import { useNode } from "../../hooks/useNode";
import Connector from "./Connector";
import { Node } from "../../types/Node";
import { HighlightMode } from "../../types/HighlightMode";
import { RenderOrder } from "../../enum/RenderOrder";

interface NodeRendererProps {
  node: Node;
}
function NodeRenderer({ node }: NodeRendererProps) {
  const {
    currentNode,
    setNode,
    getEdges,
    getNode,
    highlightMode,
    editingMode,
  } = useNode();
  const { camera } = useThree();
  const rotation = camera.quaternion;
  const { id, metadata, title } = node;
  const [x, y, z] = metadata.position;

  const isOutgoing = currentNode
    ? getEdges(currentNode.id).includes(id)
    : false;

  const isIncoming = currentNode
    ? getEdges(id).includes(currentNode.id)
    : false;

  const isHighlighted = highlightMode !== HighlightMode.NONE;
  const highlightColor =
    isHighlighted && highlightMode === HighlightMode.OUTGOING
      ? "violet"
      : "yellow";

  const selected = currentNode?.id === id;

  return (
    <>
      <SObject
        id={id}
        position={metadata.position}
        selected={selected}
        visible={editingMode ? !selected : true}
        highlight={
          isHighlighted
            ? highlightMode === HighlightMode.OUTGOING
              ? isOutgoing
              : isIncoming
            : false
        }
        highlightColor={highlightColor}
        onClick={() => {
          if (editingMode) return;
          if (currentNode && currentNode.id === id) {
            setNode(null);
          } else {
            setNode(id);
          }
        }}
      />
      <Text
        position={[x, y + 1, z]}
        scale={0.2}
        color="black"
        quaternion={rotation}
        renderOrder={RenderOrder.TEXT}
        visible={editingMode ? !selected : true}
      >
        {title}
      </Text>
      {getEdges(id).map((neighbourId) => {
        const neighbour = getNode(neighbourId);

        if (!neighbour) return;

        return (
          <>
            <Connector
              start={[x, y - 0.5, z]}
              end={[
                neighbour.metadata.position[0],
                neighbour.metadata.position[1] - 0.5,
                neighbour.metadata.position[2],
              ]}
              highlight={
                isHighlighted
                  ? highlightMode === HighlightMode.INCOMING &&
                    neighbourId === currentNode?.id
                    ? true
                    : highlightMode === HighlightMode.OUTGOING &&
                      currentNode?.id === id
                    ? true
                    : false
                  : false
              }
              highlightColor={highlightColor}
              visible={
                editingMode
                  ? selected
                    ? false
                    : neighbourId === currentNode?.id
                    ? false
                    : true
                  : true
              }
            />
          </>
        );
      })}
    </>
  );
}

export default NodeRenderer;
