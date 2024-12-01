import { createContext } from "react";
import { RenderMode } from "../enum/RenderMode";

interface RenderContextProps {
  cameraPosition: { x: number; y: number };
  zoom: number;
  mode: RenderMode;
  toggleMode: () => void;
}
export const RenderContext = createContext<RenderContextProps | null>(null);
