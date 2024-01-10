import React, { Fragment } from "react";
import Animation from "./Animation";

type Props = {
  id?: string;
  className?: string;
  children: string;
};

const LINE_ANIM_DELAY_MS = 200;
const LINE_ANIM_DURATION_MS = 2000;
const LINE_ANIM_FULFILL_PCT = 33;
const LINE_ANIM_FULFILL_MS =
  (LINE_ANIM_FULFILL_PCT * LINE_ANIM_DURATION_MS) / 100;

const AnimatedText = ({ id, className, children }: Props) => {
  const words = children.split(" ");

  return (
    <p id={id} className={className}>
      <Animation>
        {words.map((word, idx) => {
          return (
            <Fragment key={idx}>
              <span className="word">{word}</span>{" "}
            </Fragment>
          );
        })}
      </Animation>
    </p>
  );
};

export default AnimatedText;
