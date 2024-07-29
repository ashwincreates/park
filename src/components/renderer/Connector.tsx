import { Vector3 } from "three";
import { Line } from "@react-three/drei";
import { RenderOrder } from "../../enum/RenderOrder";

interface LineProps {
  start: number[];
  end: number[];
  highlight?: boolean;
  highlightColor?: string;
  visible?: boolean;
  dashed?: boolean;
}
function Connector({
  start,
  end,
  highlight = false,
  highlightColor = "lightpink",
  visible = true,
  dashed = false,
}: LineProps) {
  const startPoint = new Vector3(...start);
  const endPoint = new Vector3(...end);

  return (
    <Line
      dashed={dashed}
      dashSize={0.1}
      gapSize={0.1}
      renderOrder={highlight ? RenderOrder.LINES + 1 : RenderOrder.LINES}
      depthTest={false}
      color={highlight ? highlightColor : "black"}
      points={[startPoint, endPoint]}
      visible={visible}
    />
  );
}

export default Connector;
