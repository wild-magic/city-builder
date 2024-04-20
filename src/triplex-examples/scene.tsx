import * as React from "react";
import { useMainLoop } from "@manapotion/react";
import { Mesh } from "three";

export function Scene() {
  const ref = React.useRef<Mesh>(null);

  useMainLoop(({ delta, elapsed }) => {
    ref.current!.rotateX(0.01);
  });

  return (
    <>
      <mesh castShadow receiveShadow ref={ref}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
