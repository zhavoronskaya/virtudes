"use client";
import React from "react";
import cn from "classnames";
import useVisibilityPercentage from "@/hooks/useVisibilityPercentage";
import useScrolling from "../Scrolling/useScrolling";
import styles from "./AnimatedText.module.css";

type Props = {
  id?: string;
  className?: string;
  children: string;
};

type Line = {
  yPos: number;
  xStart: number;
  xEnd: number;
  height: number;
};

const LINE_ANIM_DELAY_MS = 200;
const LINE_ANIM_DURATION_MS = 2000;
const LINE_ANIM_FULFILL_PCT = 33;
const LINE_ANIM_FULFILL_MS =
  (LINE_ANIM_FULFILL_PCT * LINE_ANIM_DURATION_MS) / 100;

const AnimatedText = ({ id, className, children }: Props) => {
  useScrolling();
  const [lines, setLines] = React.useState<Array<Line>>([]);

  const wrapperRef = React.useRef<HTMLParagraphElement>(null);
  const wrapperRect = wrapperRef.current?.getBoundingClientRect();
  const percentage = useVisibilityPercentage(wrapperRect);

  const words = children.split(" ");
  const isActive = percentage != 0 && percentage != 100;

  React.useEffect(() => {
    if (!wrapperRef.current) return;
    const words = wrapperRef.current.querySelectorAll<HTMLElement>(".word");
    const baseHeight = words[0].getBoundingClientRect().height ?? 0;
    const linesMap: Record<number, Line> = {};

    words.forEach((word) => {
      const wordRect = word.getBoundingClientRect();
      const yPos = word.offsetTop;
      const xStart = wordRect.left;
      const xEnd = wordRect.right;
      const existingLine = linesMap[yPos];
      word.classList.add(`word-${yPos}`);

      if (existingLine) {
        if (xStart < existingLine.xStart) existingLine.xStart = xStart;
        if (xEnd > existingLine.xEnd) existingLine.xEnd = xEnd;
        return;
      }

      linesMap[yPos] = { yPos, xStart, xEnd, height: baseHeight };
    });

    setLines(Array.from(Object.values(linesMap)));
  }, []);

  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (isActive) {
      lines.forEach((line, idx) => {
        const { yPos } = line;
        const timeout = idx * LINE_ANIM_DELAY_MS + LINE_ANIM_FULFILL_MS;
        setTimeout(() => {
          const words = wrapper.querySelectorAll<HTMLElement>(`.word-${yPos}`);
          words.forEach((word) => (word.style.opacity = "1"));
        }, timeout);
      });
    } else {
      const words = wrapper.querySelectorAll<HTMLElement>(".word");
      words.forEach((word) => (word.style.opacity = "0"));
    }
  }, [isActive, lines]);

  const resultClassName = cn(styles.textWrapper, className, {
    active: isActive,
  });

  return (
    <p id={id} ref={wrapperRef} className={resultClassName}>
      {words.map((word, idx) => {
        return (
          <React.Fragment key={word + idx}>
            <span className={`word word-${idx}`}>{word}</span>{" "}
          </React.Fragment>
        );
      })}

      {lines.map((line, idx) => {
        return (
          <span
            key={line.yPos}
            className="line absolute block pointer-events-none bg-[#FDF7FA] rounded-lg"
            style={{
              height: line.height,
              width: line.xEnd - line.xStart,
              top: line.yPos,
              animationDelay: `${LINE_ANIM_DELAY_MS * idx}ms`,
              animationDuration: `${LINE_ANIM_DURATION_MS}ms`,
            }}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
