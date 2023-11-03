"use client";
import React, { useEffect } from "react";
import * as THREE from "three";
import { suspend } from "suspend-react";
import { useGLTF } from "@react-three/drei";
import { useLoader, useFrame, useThree, Camera } from "@react-three/fiber";

import { texturesMap, cameraMovingMap as cameraMap } from "./constants";
import { useTexturesMap, TexturesMap } from "@/hooks/useTexturesMap";
import useMousePosition from "@/components/MousePosition/useMousePosition";
import useScrolling from "@/components/Scrolling/useScrolling";
import url from "@/helpers/url";

type Props = {
  // url: string | null;
};

const INITIAL_POS = cameraMap[0];

function worldPointFromScreenPoint(screenPoint: THREE.Vector2, camera: Camera) {
  let worldPoint = new THREE.Vector3();
  worldPoint.x = screenPoint.x;
  worldPoint.y = screenPoint.y;
  worldPoint.z = 0;
  worldPoint.unproject(camera);
  return worldPoint;
}

const handleCamera = (
  camera: Camera,
  pos: THREE.Vector3,
  lookAt: THREE.Vector3
) => {
  camera.position.set(pos.x, pos.y, pos.z);
  camera.lookAt(lookAt.x, lookAt.y, lookAt.z);
  camera.updateProjectionMatrix();
};

function Model(props: Props) {
  const groupRef = React.useRef<THREE.Group>(null!);
  // const lightRef = React.useRef<THREE.SpotLight>(null!);
  const lightRef = React.useRef<THREE.PointLight>(null!);
  const prevOffset = React.useRef(0);
  const traversed = React.useRef(false);
  const childMaterial = React.useRef(new THREE.MeshBasicMaterial());

  const { camera, viewport } = useThree();
  const childTexturesMap = useTexturesMap(texturesMap);
  const mousePos = useMousePosition();
  const scrolling = useScrolling();
  const gltf = useGLTF(url("/model/VirtudasNew.glb"));
  // console.log("AAA", gltf);

  THREE.ColorManagement.enabled = true;
  // console.log("gltf", gltf.scene);

  //Helpers

  // const camera = React.useRef<THREE.PerspectiveCamera>(null!);
  // const helper = useHelper(camera, THREE.CameraHelper);

  React.useEffect(() => {
    camera.position.set(
      INITIAL_POS.position.x,
      INITIAL_POS.position.y,
      INITIAL_POS.position.z
    );
    camera.lookAt(INITIAL_POS.lookAt);
    camera.updateProjectionMatrix();
  }, []);

  suspend(async () => {
    if (traversed.current) return;
    if (!gltf || !gltf.scene) return;
    let c = 0;
    gltf.scene.traverse((child: any) => {
      if (child.name === "Scene") return;
      c++;
      child.material = childMaterial.current.clone();

      const childTexture = childTexturesMap?.[child.name];
      if (childTexture) {
        child.material.map = childTexture;
        child.material.map.dispose();
      }

      if (child.name === "EmFlash") {
        child.material.color = new THREE.Color("#f5c3f1");
      } else if (child.name === "EmHouse") {
        child.material.color = new THREE.Color("#f5c3f1");
      }
    });
    console.log("ccc", c);
    traversed.current = true;
  }, [gltf, childTexturesMap]);

  const handleMouse = (camera: Camera) => {
    let worldPoint = new THREE.Vector3();
    if (mousePos) {
      worldPoint.x = mousePos.x;
      worldPoint.y = mousePos.y;
      worldPoint.z = 0;
      worldPoint.unproject(camera);
    }
    return worldPoint;
  };

  const _handleCameraOld = (
    camera: Camera,
    pos: THREE.Vector3,
    lookAt: THREE.Vector3,
    screen3dPos: THREE.Vector3
  ) => {
    camera.position.set(pos.x, pos.y, pos.z);
    camera.lookAt(lookAt.x, lookAt.y, lookAt.z);
    camera.updateProjectionMatrix();

    if (mousePos) {
      camera.position.lerpVectors(camera.position, screen3dPos, 0.7);
      // camera.position.x = THREE.MathUtils.lerp(
      //   camera.position.x,
      //   my3dPosition.x,
      //   0.03
      // );
      camera.rotation.y = THREE.MathUtils.lerp(
        camera.rotation.y,
        screen3dPos.x * -Math.PI * 0.025,
        0.05
      );
    }
  };

  const handleLight = (
    pos: THREE.Vector3,
    lookAt: THREE.Vector3,
    screen3dPos: THREE.Vector3
  ) => {
    if (!mousePos || !lightRef.current) return;

    // lightRef.current.position.set(pos.x, pos.y, pos.z);
    // lightRef.current.target.position.set(
    //   screen3dPos.x,
    //   screen3dPos.y,
    //   screen3dPos.z
    // );
    // lightRef.current.position.set(pos.x, pos.y, pos.z);
    // lightRef.current.position.lerpVectors(pos, screen3dPos, 0.1);
    // lightRef.current.position.set(screen3dPos.x, screen3dPos.y, screen3dPos.z);
    // lightRef.current.position.set(pos.x, pos.y - 20.0, pos.z);

    // lightRef.current.updateMatrixWorld();
    // lightRef.current.target.updateMatrixWorld();
  };

  useFrame((state, delta) => {
    const offset = scrolling.offset;
    const isOffsetChanged = offset !== prevOffset.current;

    let pos = new THREE.Vector3();
    let look = new THREE.Vector3();
    let mouse3dPos = handleMouse(camera);
    // console.log("POINT", mouse3dPos);

    // if (isOffsetChanged)
    {
      const firstLargestIndex = cameraMap.findIndex((v) => v.offset >= offset);
      const startPos = cameraMap[firstLargestIndex - 1];
      const endPos = cameraMap[firstLargestIndex];

      if (!startPos || !endPos) return;

      const interval =
        (offset - startPos.offset) / (endPos.offset - startPos.offset);

      pos = pos.lerpVectors(startPos.position, endPos.position, interval);
      look = look.lerpVectors(startPos.lookAt, endPos.lookAt, interval);

      // handleCamera(state.camera, pos, look);
      _handleCameraOld(state.camera, pos, look, mouse3dPos);

      // handleLight(pos, look, mouse3dPos);
    }

    prevOffset.current = offset;
  });

  return (
    <group ref={groupRef} dispose={null}>
      <primitive scale={0.3} object={gltf.scene} />
    </group>
  );
}

export default React.memo(Model);

useGLTF.preload(url("/model/VirtudasNew.glb"));
