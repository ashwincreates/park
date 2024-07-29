import { PropsWithChildren, useState } from "react";
import { RenderContext } from "../../context/RenderContext";
import { RenderMode } from "../../enum/RenderMode";

function RenderManager(props: PropsWithChildren) {
  const [mode, setMode] = useState<RenderMode>("2D");

  const toggleMode = () => {
    if (mode === "2D") setMode("3D");
    else setMode("2D");
  };

  return (
    <RenderContext.Provider
      value={{
        cameraPosition: { x: 10, y: 10 },
        zoom: 1,
        mode,
        toggleMode,
      }}
    >
      {props.children}
    </RenderContext.Provider>
  );
}

export default RenderManager;
