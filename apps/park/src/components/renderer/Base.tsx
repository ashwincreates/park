import vertexShader from "../../shaders/base/vertex.glsl?raw";
import fragmentShader from "../../shaders/base/fragment.glsl?raw";

function Base() {
  return (
    <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 100]} />
      {/* <meshBasicMaterial color="lightgreen" side={DoubleSide} /> */}
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default Base;
