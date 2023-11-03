"use client";
import { Canvas } from "@react-three/fiber";

import React, { Suspense } from "react";
import { Sky, Sparkles } from "@react-three/drei";
import ParqueModel from "./ParqueModel";

export default function MainScene() {
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
      <Sparkles
        size={100}
        speed={0.5}
        scale={[1000, 1000, 1000]}
        count={10000}
      />

      <Sky
        azimuth={180}
        turbidity={10}
        rayleigh={1.7}
        inclination={0.51} // change that!
        distance={100000}
        // sunPosition={[1000, 600, 1000]}
        mieDirectionalG={0.7}
        mieCoefficient={0.005}
      />

      {/* <Suspense fallback="Loading..."> */}
      <ParqueModel />
      {/* </Suspense> */}
    </Canvas>
  );
}
