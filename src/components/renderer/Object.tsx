import { animated, useSpring } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { useEffect, useRef, useState } from "react";
import { Plane, Vector3 } from "three";
import { GRID_SIZE } from "../../constants/Render";
import { Outlines } from "@react-three/drei";
import { RenderOrder } from "../../enum/RenderOrder";

interface SObjectProps {
  id: string;
  position?: [x: number, y: number, z: number];
  selected?: boolean;
  highlight?: boolean;
  highlightColor?: string;
  onClick?: () => void;
  onPositionChange?: (position: [x: number, y: number, z: number]) => void;
  visible?: boolean;
  transparent?: boolean;
  draggable?: boolean;
  opacity?: number;
}
function SObject(props: SObjectProps) {
  const {
    position = [0, 0, 0],
    selected = false,
    onClick,
    highlight = false,
    highlightColor = "lightpink",
    onPositionChange,
    visible = true,
    transparent = false,
    draggable = false,
    opacity = 1.0,
  } = props;
  const { raycaster } = useThree();

  const [pos, setPos] = useState(position);
  const [isDragging, setIsDragging] = useState(false);
  const allowDragging = draggable;

  const gridSize = GRID_SIZE;
  const roundToGrid = (value: number) =>
    Math.round(value / gridSize) * gridSize;

  const [spring, api] = useSpring(() => ({
    position: pos,
    scale: 1,
    rotation: [0, 0, 0],
    config: { friction: 10 },
  }));

  useEffect(() => {
    onPositionChange?.(pos);
  }, [pos]);

  const bind = useDrag(({ active, timeStamp }) => {
    if (!allowDragging) return;

    const [x, y, z] = pos;

    if (active) {
      // Define the plane in Y-axis at the current object position
      const plane = new Plane(new Vector3(0, 1, 0), y);

      // Intersect the ray with the plane
      const intersection = new Vector3();
      raycaster.ray.intersectPlane(plane, intersection);

      // Update the object position
      setPos([roundToGrid(intersection.x), y, roundToGrid(intersection.z)]);
    }

    if (active) {
      setIsDragging(true);
    } else {
      setIsDragging(false);
    }

    api.start({
      scale: active ? 1.1 : 1,
      position: active ? [x, y + 0.5, z] : pos,
    });
    return timeStamp;
  });

  return (
    <>
      <animated.mesh
        {...spring}
        {...bind()}
        onClick={() => onClick?.()}
        renderOrder={RenderOrder.OBJECT}
        visible={visible}
      >
        <boxGeometry />
        <meshPhongMaterial
          color="red"
          opacity={opacity}
          transparent={transparent}
        />
        <Outlines color={"skyblue"} visible={!isDragging && selected} />
        <Outlines color={highlightColor} visible={highlight} />
      </animated.mesh>
      <mesh
        position={[pos[0], -0.5, pos[2]]}
        rotation={[-Math.PI / 2, 0, 0]}
        visible={visible && isDragging}
        renderOrder={RenderOrder.OBJECT}
      >
        <planeGeometry />
        <meshBasicMaterial color="skyblue" />
      </mesh>
    </>
  );
}

export default SObject;
