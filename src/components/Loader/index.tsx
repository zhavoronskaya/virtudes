"use client";
import React from "react";
import { useProgress } from "@react-three/drei";

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

  if (isLoaded) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#cbf0d0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="inline-block animate-bounce infinite"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    );
  }

  return (
    <span
      className="lg:text-2xl text-xl inline-block"
      style={{ height: "48px" }}
    >
      Loading... {Math.floor(loading.progress)}%
    </span>
  );
}

// useGLTF.preload("/model/VirtTr9.glb");
