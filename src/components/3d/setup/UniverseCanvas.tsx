import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Lighting from "./Lighting";
import Controls from "./Controls";

const UniverseCanvas = () => {
  return (
    <Canvas className="w-full h-full ">
      <Experience />
      <Lighting />
      <Controls />
    </Canvas>
  );
};

export default UniverseCanvas;
