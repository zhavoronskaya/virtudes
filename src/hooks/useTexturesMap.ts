import React from "react";
import { suspend } from "suspend-react";
import { loadTexture } from "@/helpers/loadTexture";

export type TexturesMap = Record<string, THREE.Texture>;

export const useTexturesMap = (urlMap: Record<string, string>) => {
  const texturesMap = suspend(async () => {
    const result: Record<string, THREE.Texture> = {};
    const texturePromises = Object.entries(urlMap).map((child) => {
      const name = child[0];
      const url = child[1];
      return loadTexture(url).then((texture) => (result[name] = texture));
    });

    console.log("run");
    await Promise.all(texturePromises);
    console.log("set");
    return result;
  }, []);

  return texturesMap;
};
