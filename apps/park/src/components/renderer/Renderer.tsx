import { Canvas } from "@react-three/fiber";
import NodeRenderer from "./NodeRenderer";
import { useRenderManager } from "../../hooks/useRenderManager";
import Controls from "./Controls";
import Grid from "./Grid";
import Base from "./Base";
import { useNode } from "../../hooks/useNode";
import NewNodeRenderer from "./NewNodeRenderer";
import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

function Renderer() {
  const { connectionGraph } = useNode();
  const { mode } = useRenderManager();
  return (
    <Canvas>
      <Grid />
      <Base />
      <axesHelper scale={[100, 100, 100]} />
      <Controls />
      <directionalLight position={[10, 9, 5]} intensity={2} />
      {connectionGraph.nodes.map((node) => (
        <NodeRenderer node={node} />
      ))}
      <NewNodeRenderer />
      <PerspectiveCamera
        position={[10, 10, 10]}
        zoom={1}
        makeDefault={mode === "3D"}
      />
      <OrthographicCamera
        position={[10, 10, 10]}
        zoom={50}
        makeDefault={mode === "2D"}
      />
    </Canvas>
  );
}

export default Renderer;
