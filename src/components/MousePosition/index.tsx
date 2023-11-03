"use client";
import React from "react";
import { MaybePosition } from "./types";
import { MousePositionCtx } from "./useMousePosition";

const MousePosition = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = React.useState<MaybePosition>(null);

  React.useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const mouseY = -(e.clientY / window.innerHeight - 0.5);
      const mouseX = e.clientX / window.innerWidth - 0.5;
      setMousePosition({ x: mouseX, y: mouseY });
      // console.log("MOUSSE", mousePositionRef.current);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <MousePositionCtx.Provider value={mousePosition}>
      {children}
    </MousePositionCtx.Provider>
  );
};

export default MousePosition;
