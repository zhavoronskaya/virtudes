"use client";
import React from "react";
import { useProgress } from "@react-three/drei";
import styles from "./Loader.module.css";

export function Loader() {
  const loading = useProgress();
  const isLoaded = Boolean(loading.progress === 100);

  React.useEffect(() => {
    if (isLoaded) {
      const mainElement = document.getElementById("main");
      if (mainElement) {
        mainElement.classList.remove("overflow-hidden");
        mainElement.classList.add("overflow-auto", "loaded");
      }
    }
  }, [isLoaded]);

  if (isLoaded) return null;

  return (
    <div className={styles.loader}>
      <span className="p-4 w-full block lg:text-2xl text-xl text-center animate-pulse infinite leading-tight ">
        Loading...
        <br />
        {Math.floor(loading.progress)}%
      </span>
    </div>
  );
}

// useGLTF.preload("/model/VirtTr9.glb");
