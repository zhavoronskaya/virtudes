"use client";
import { Canvas } from "@react-three/fiber";

import React, { Suspense } from "react";

import ParqueModel from "./ParqueModel";
import Environment from "./Environment";

export default function MainScene() {
  // const isDark = theme === "dark";

  return (
    <Canvas
      frameloop="demand"
      performance={{ min: 0.5 }}
      className="h-full w-full"
      // shadows
      // dpr={[1, 2]}
      // dpr={1}
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [42, 74, -4],
      }}
    >
      <Environment />

      {/* <Suspense fallback="Loading..."> */}
      <ParqueModel />
      {/* </Suspense> */}
    </Canvas>
  );
}
