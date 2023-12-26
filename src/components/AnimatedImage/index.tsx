"use client";

import url from "@/helpers/url";
import Image from "next/image";
import useScrolling from "../Scrolling/useScrolling";
import { useRef } from "react";
import useVisibilityPercentage from "@/hooks/useVisibilityPercentage";

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

  return (
    <Image
      ref={imageRef}
      src={url(src)}
      width={width}
      height={height}
      alt={alt ?? ""}
      className={
        "w-full h-full object-cover rounded-lg  outline-[12px] outline-[#201F36] outline" +
        " " +
        imageClassName
      }
      style={{
        objectPosition: `50% ${percentage / positionPercentageDivider}%`,
      }}
    />
  );
};

export default AnimatedImage;
