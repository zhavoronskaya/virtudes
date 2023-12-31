import url from "@/helpers/url";
import * as THREE from "three";

export const texturesMap = {
  Rock: url("/textures/rocks1024.jpg"),
  Bushes: url("/textures/bushes1024.jpg"),
  wall1: url("/textures/wall12048.jpg"),
  wall2: url("/textures/wall22048.jpg"),
  wall3: url("/textures/wall34096.jpg"),
  wall4: url("/textures/wall42048.jpg"),
  Stairs: url("/textures/stairs1024.jpg"),
  Ground: url("/textures/ground2048.jpg"),
  Bench: url("/textures/bench1024.jpg"),
  Pools: url("/textures/pools1024.jpg"),
  flowers1: url("/textures/flower11024.jpg"),
  flowers2: url("/textures/flower21024.jpg"),
  Flashlights: url("/textures/flashlights1024.jpg"),
  Sculptures: url("/textures/sculpture1024.jpg"),
  Wings: url("/textures/wings1024.jpg"),
  Trashes: url("/textures/trashes1024.jpg"),
  fences1: url("/textures/fences11024.jpg"),
  fences2: url("/textures/fences21024.jpg"),
  fences3: url("/textures/fences31024.jpg"),
  Mask: url("/textures/mask1024.jpg"),
  tree1: url("/textures/tree1.jpg"),
  tree2: url("/textures/tree2.jpg"),
  tree3: url("/textures/tree3.jpg"),
  tree4: url("/textures/tree4.jpg"),
  tree5: url("/textures/tree5.jpg"),
  tree6: url("/textures/tree6.jpg"),
  tree7: url("/textures/tree7.jpg"),
  tree8: url("/textures/tree8.jpg"),
  tree9: url("/textures/tree9.jpg"),
  tree10: url("/textures/tree10.jpg"),
  tree11: url("/textures/tree11.jpg"),
  tree12: url("/textures/tree12.jpg"),
  tree13: url("/textures/tree13.jpg"),
  tree14: url("/textures/tree14.jpg"),
  tree15: url("/textures/tree15.jpg"),
  tree16: url("/textures/tree16.jpg"),
  tree17: url("/textures/tree17.jpg"),
  tree18: url("/textures/tree18.jpg"),
  tree19: url("/textures/tree19.jpg"),
  tree20: url("/textures/tree20.jpg"),
  tree21: url("/textures/tree21.jpg"),
  tree22: url("/textures/tree22.jpg"),
  tree23: url("/textures/tree23.jpg"),
  tree24: url("/textures/tree24.jpg"),
  tree25: url("/textures/tree25.jpg"),
  tree26: url("/textures/tree26.jpg"),
  tree27: url("/textures/tree27.jpg"),
  tree28: url("/textures/tree28.jpg"),
  tree29: url("/textures/tree29.jpg"),
  tree30: url("/textures/tree30.jpg"),
  tree31: url("/textures/tree31.jpg"),
  tree32: url("/textures/tree32.jpg"),
  tree33: url("/textures/tree33.jpg"),
  tree34: url("/textures/tree34.jpg"),
  tree35: url("/textures/tree35.jpg"),
  tree36: url("/textures/tree36.jpg"),
  palm1: url("/textures/palm1.jpg"),
  palm2: url("/textures/palm2.jpg"),
};

type CameraMap = {
  offset: number;
  position: THREE.Vector3;
  lookAt: THREE.Vector3;
};

export const cameraMovingMap: CameraMap[] = [
  {
    offset: 0,
    position: new THREE.Vector3(-19.8, 94.4, 24.9),
    lookAt: new THREE.Vector3(200, 68, -50),
  },
  {
    offset: 0.05,
    position: new THREE.Vector3(-19.8, 84.4, 24.9),
    lookAt: new THREE.Vector3(56, 0, -38),
  },
  // {
  //   offset: 0.07,
  //   position: new THREE.Vector3(27, 94, -4),
  //   lookAt: new THREE.Vector3(37, 68, -5),
  // },
  {
    offset: 0.07,
    position: new THREE.Vector3(-19.8, 74.4, 34.9),
    lookAt: new THREE.Vector3(56, 0, -38),
  },
  {
    offset: 0.1,
    position: new THREE.Vector3(37, 80, -12),
    lookAt: new THREE.Vector3(0, 10, 4),
  },
  {
    offset: 0.15,
    position: new THREE.Vector3(28, 80, -12),
    lookAt: new THREE.Vector3(-8, 8, 4),
  },
  {
    offset: 0.2,
    position: new THREE.Vector3(18, 60, -4),
    lookAt: new THREE.Vector3(-16, 8, 10),
  },
  {
    offset: 0.25,
    position: new THREE.Vector3(20, 66, -3),
    lookAt: new THREE.Vector3(-34, 0, 0),
  },

  {
    offset: 0.3,
    position: new THREE.Vector3(14, 64, -4.4),
    lookAt: new THREE.Vector3(-40, 0, 0),
  },
  {
    offset: 0.35,
    position: new THREE.Vector3(1.8, 64, -4.4),
    lookAt: new THREE.Vector3(-43, 0, 0),
  },
  {
    offset: 0.4,
    position: new THREE.Vector3(0, 66, -10),
    lookAt: new THREE.Vector3(-56, -20, 4),
  },
  // {
  //   offset: 0.45,
  //   position: new THREE.Vector3(-4, 60, -12),
  //   lookAt: new THREE.Vector3(-20, 0, 42),
  // },
  {
    offset: 0.5,
    position: new THREE.Vector3(-19.8, 84.4, 24.9),
    lookAt: new THREE.Vector3(56, 0, -38),
  },
  // {
  //   offset: 0.5,
  //   position: new THREE.Vector3(-8, 60.4, -16),
  //   lookAt: new THREE.Vector3(-20, 0, 42),
  // },
  {
    offset: 0.55,
    position: new THREE.Vector3(-7, 64, -8),
    lookAt: new THREE.Vector3(-20, 0, 32),
  },
  {
    offset: 0.6,
    position: new THREE.Vector3(-6, 64, -4),
    lookAt: new THREE.Vector3(60, 0, 42),
  },
  {
    offset: 0.65,
    position: new THREE.Vector3(-2, 64, -0.5),
    lookAt: new THREE.Vector3(60, 0, 12),
  },
  {
    offset: 0.7,
    position: new THREE.Vector3(2, 62, -0.5),
    lookAt: new THREE.Vector3(80, 0, 4),
  },
  {
    offset: 0.75,
    position: new THREE.Vector3(8, 62, 2),
    lookAt: new THREE.Vector3(30, 4, -10),
  },
  {
    offset: 0.8,
    position: new THREE.Vector3(8, 64, 6),
    lookAt: new THREE.Vector3(40, 0, -38),
  },
  {
    offset: 0.85,
    position: new THREE.Vector3(12, 66, 0.8),
    lookAt: new THREE.Vector3(56, 0, -38),
  },

  {
    offset: 0.9,
    position: new THREE.Vector3(14.6, 64, -0.6),
    lookAt: new THREE.Vector3(66, 20, -38),
  },

  {
    offset: 0.95,
    position: new THREE.Vector3(22.5, 66, 0.8),
    lookAt: new THREE.Vector3(-56, 20, -38),
  },

  {
    offset: 1,
    position: new THREE.Vector3(5, 95, 10),
    lookAt: new THREE.Vector3(-6, 20, -8),
  },
];
