import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export default function useParkTexture(url: string, name?: string) {
  const texture = useTexture(url);

  const applyTexture = (child: THREE.Object3D | any) => {
    if (child.material) child.material.map = texture;
  };

  texture.flipY = false;

  return {
    texture,
    applyTexture,
  };
}
