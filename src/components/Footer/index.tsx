"use client";
import React from "react";
import useAudio from "@/hooks/useAudio";
import styles from "./Footer.module.css";
import url from "@/helpers/url";

export default function Footer() {
  const [isActive, setIsActive] = React.useState(false);
  const { toggle } = useAudio(url("/music/Virtudes2.mp3"), { startTime: 0 });

  const handleClick = () => {
    setIsActive((v) => !v);
    toggle();
  };

  let iconClassName = styles.bird + " pointer -scale-x-100";
  if (isActive) iconClassName += " active";

  return (
    <div className="flex justify-end p-4 pr-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClassName}
        onClick={handleClick}
      >
        <path d="M16 7h.01" />
        <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
        <path d="m20 7 2 .5-2 .5" />
        <path d="M10 18v3" />
        <path d="M14 17.75V21" />
        <path d="M7 18a6 6 0 0 0 3.84-10.61" />
      </svg>
    </div>
  );
}
