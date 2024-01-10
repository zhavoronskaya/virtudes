"use client";
import React from "react";
import cn from "classnames";
import useScrolling from "../Scrolling/useScrolling";
import styles from "./FloatingText.module.css";
import useVisibilityPercentage from "@/hooks/useVisibilityPercentage";

type Props = {
  id?: string;
  children: string;
  delay?: number;
};

const FloatingText = ({ id, children }: Props) => {
  useScrolling();
  const wrapperRef = React.useRef<HTMLParagraphElement>(null);
  const wrapperRect = wrapperRef.current?.getBoundingClientRect();
  const percentage = useVisibilityPercentage(wrapperRect);
  const isActive = percentage != 0 && percentage != 100;

  const letters = children.split("");
  const className = cn(styles.floatingText, { active: isActive });

  return (
    <span id={id} className={className} ref={wrapperRef}>
      {letters.map((letter, idx) => {
        return (
          <span
            key={letter + idx}
            className={`letter letter-${idx + 1}`}
            style={{ animationDelay: +idx * 0.01 + "s" }}
          >
            {letter === " " ? <>&nbsp;</> : letter}
          </span>
        );
      })}
    </span>
  );
};

export default FloatingText;
