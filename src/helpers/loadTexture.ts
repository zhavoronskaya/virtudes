import * as THREE from "three";

export const loadTexture = (url: string): Promise<THREE.Texture> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const texture = new THREE.Texture(image);

    image.addEventListener("load", () => {
      texture.needsUpdate = true;
      texture.flipY = false;
      texture.colorSpace = THREE.SRGBColorSpace;
      resolve(texture);
    });

    image.src = url;
  });
};
