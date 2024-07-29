import { useThree } from "@react-three/fiber";
import { useRenderManager } from "../../hooks/useRenderManager";
import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useNode } from "../../hooks/useNode";
import { Plane, Vector3 } from "three";

const Xplane = new Plane(new Vector3(0, 0.5, 0));

function Controls() {
  const {
    camera,
    raycaster,
    gl: { domElement },
  } = useThree();

  const { mode } = useRenderManager();
  const { currentNode } = useNode();
  const positionOnPlane = useRef(new Vector3());

  useEffect(() => {
    const intersection = new Vector3();
    raycaster.ray.intersectPlane(Xplane, intersection);

    // if (currentNode) {
    //   const destination = new Vector3(...currentNode.metadata.position);
    //   const source = positionOnPlane.current;
    //   const newPos = camera.position.add(destination.sub(source));
    //   camera.position.set(...newPos.toArray());
    //   // Update the position on plane
    // }
    positionOnPlane.current = intersection;
  }, [currentNode]);

  return (
    <OrbitControls
      camera={camera}
      domElement={domElement}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      enableDamping={false}
      enableRotate={mode !== "2D"}
      maxZoom={100}
      minZoom={25}
    />
  );
}

export default Controls;
