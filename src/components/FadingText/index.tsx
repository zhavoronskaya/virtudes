"use client";
import useScrolling from "../Scrolling/useScrolling";
import styles from "./FadingText.module.css";

type Props = {
  id?: string;
  children: string;
  offset: number;
};

const FadingText = ({ id, offset, children }: Props) => {
  const scrolling = useScrolling();

  const words = children.split(" ");
  const isActive = scrolling.offset >= offset;
  let className = styles.fadingText;
  if (isActive) className += " active";

  return (
    <div id={id} className={className}>
      {words.map((word, idx) => {
        return (
          <span key={word + idx}>
            <span
              className={`word word-${idx + 1}`}
              style={{ animationDelay: idx * 0.1 + "s" }}
            >
              {word}
            </span>{" "}
          </span>
        );
      })}
    </div>
  );
};

export default FadingText;
