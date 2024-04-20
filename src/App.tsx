import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./triplex-examples/scene";

export const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};
