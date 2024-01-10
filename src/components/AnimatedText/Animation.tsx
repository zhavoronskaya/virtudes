"use client";
import React, { Fragment } from "react";
import classNames from "classnames";
import useScrollingVisibilityPercentage from "@/hooks/useScrollingVisibilityPercentage";
import styles from "./AnimatedText.module.css";

type Props = {
  children: React.ReactNode;
};

const Animation = ({ children }: Props) => {
  const { ref, isActive } = useScrollingVisibilityPercentage();
  const [wordWrappers, setWordWrappers] = React.useState<string[][]>();

  React.useEffect(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll<HTMLElement>(".word");
    const wordsWrappersMap: Record<number, string[]> = {};

    words.forEach((word) => {
      const yPos = word.offsetTop;
      const existingWrapper = wordsWrappersMap[yPos] || [];
      wordsWrappersMap[yPos] = [...existingWrapper, word.innerText];
    });

    setWordWrappers(Array.from(Object.values(wordsWrappersMap)));
  }, []);

  const resultClassName = classNames(styles.wrapper, {
    active: isActive,
  });

  return (
    <span ref={ref} className={resultClassName}>
      {!Boolean(wordWrappers?.length) && children}

      {wordWrappers?.map((wrapper, idx) => {
        const words = wrapper.join(" ");

        return (
          <span
            key={idx}
            className="block line"
            style={
              isActive
                ? {
                    transition: `clip-path 1s cubic-bezier(0,.63,.27,.91)`,
                    transitionDelay: idx * 100 + "ms",
                  }
                : undefined
            }
          >
            <span>{words}</span>
          </span>
        );
      })}
    </span>
  );
};

export default Animation;
