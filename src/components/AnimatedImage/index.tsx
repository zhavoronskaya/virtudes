"use client";

import url from "@/helpers/url";
import Image from "next/image";
import useScrolling from "../Scrolling/useScrolling";
import { useRef } from "react";
import useVisibilityPercentage from "@/hooks/useVisibilityPercentage";
import { useTheme } from "@/context/ThemeContext";

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  imageClassName?: string;
  positionPercentageDivider?: number;
};

const AnimatedImage = ({
  src,
  width,
  height,
  alt,
  imageClassName,
  positionPercentageDivider = 1,
}: Props) => {
  // return (
  //   <Image
  //     src={url(src)}
  //     width={width}
  //     height={height}
  //     alt={alt ?? ""}
  //     className={
  //       "w-full h-full object-cover rounded-lg  outline-[12px] outline-[#201F36] outline" +
  //       " " +
  //       imageClassName
  //     }
  //   />
  // );

  useScrolling();
  const imageRef = useRef<HTMLImageElement>(null);
  const imgRect = imageRef.current?.getBoundingClientRect();
  const percentage = useVisibilityPercentage(imgRect);

  const { theme } = useTheme();
  const outlineColor =
    theme === "dark" ? "outline-[#201F36]" : "outline-[#B0C0C2]";
  return (
    <Image
      ref={imageRef}
      src={url(src)}
      width={width}
      height={height}
      alt={alt ?? ""}
      className={`w-full h-full object-cover rounded-lg  outline-[12px] outline ${outlineColor} ${imageClassName}`}
      style={{
        objectPosition: `50% ${100 - percentage / positionPercentageDivider}%`,
      }}
    />
  );
};

export default AnimatedImage;
