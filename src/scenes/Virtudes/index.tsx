"use client";
import { Canvas } from "@react-three/fiber";

import React, { Suspense } from "react";
import { PerspectiveCamera } from "three";
import ParqueModel from "./ParqueModel";
import Environment from "./Environment";
import { cameraMovingMap } from "./constants";

const CAMERA_INITIALS = cameraMovingMap[0];
const CAMERA_POS = CAMERA_INITIALS.position;
const CAMERA_LOOK_AT = CAMERA_INITIALS.lookAt;
const CAMERA_SETTINGS = { fov: 45, near: 0.1, far: 1000 };

const camera = new PerspectiveCamera();
camera.fov = CAMERA_SETTINGS.fov;
camera.near = CAMERA_SETTINGS.near;
camera.far = CAMERA_SETTINGS.far;
camera.position.set(CAMERA_POS.x, CAMERA_POS.y, CAMERA_POS.z);
camera.lookAt(CAMERA_INITIALS.lookAt);

export default function MainScene() {
  // const isDark = theme === "dark";

  return (
    <Canvas
      frameloop="demand"
      // performance={{ min: 0.5 }}
      className="h-full w-full"
      // shadows
      // dpr={[1, 2]}
      dpr={1}
      gl={{
        powerPreference: "high-performance",
      }}
      camera={camera}
    >
      <Environment />

      {/* <Suspense fallback="Loading..."> */}
      <ParqueModel />
      {/* </Suspense> */}
    </Canvas>
  );
}
