"use client";
import React, { CSSProperties } from "react";
import { useProgress } from "@react-three/drei";
import useScrolling from "../Scrolling/useScrolling";

export function Loader() {
  const loading = useProgress();
  const scroll = useScrolling();
  const isVisible = scroll.offset === 0;
  // const isLoaded = false;
  const isLoaded = Boolean(loading.progress === 100);

  React.useEffect(() => {
    if (isLoaded) {
      const mainElement = document.getElementById("main");
      mainElement?.classList.remove("overflow-hidden");
      mainElement?.classList.add("overflow-auto", "loaded");
    }
  }, [isLoaded]);

  const styles: CSSProperties = {
    opacity: isVisible ? "1" : "0",
    transition: "opacity 0.2s",
  };

  return (
    <div
      className="fixed bottom-0 right-0 left-0 px-8 py-4 flex z-20 justify-center items-center"
      style={styles}
    >
      {isLoaded && (
        // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   width="48"
        //   viewBox="0 0 24 24"
        //   fill="none"
        //   stroke="#cbf0d0"
        //   strokeWidth="2"
        //   strokeLinecap="round"
        //   strokeLinejoin="round"
        //   className="inline-block animate-bounce infinite"
        // >
        //   <path d="M12 5v14" />
        //   <path d="m19 12-7 7-7-7" />
        // </svg>
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block animate-bounce infinite"
        >
          <path
            d="M19 1V37M19 37L37 19M19 37L1 19"
            stroke="#FDF7FA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {!isLoaded && (
        <span
          className="lg:text-[24px]/[24px] sm:text-[20px]/[20px] text-[16px]/[16px] flex items-center opacity-60"
          style={{ height: "48px" }}
        >
          <span className="">Loading...</span>
          <span className="">{Math.floor(loading.progress)}%</span>
        </span>
      )}
    </div>
  );
}

// useGLTF.preload("/model/VirtTr9.glb");
