import { useRef } from "react";
import useScrolling from "@/components/Scrolling/useScrolling";
import useVisibilityPercentage from "./useVisibilityPercentage";

const useScrollingVisibilityPercentage = () => {
  useScrolling();
  const ref = useRef<HTMLParagraphElement>(null);
  const rect = ref.current?.getBoundingClientRect();
  const percentage = useVisibilityPercentage(rect);
  const isActive = percentage != 0 && percentage != 100;

  return {
    ref,
    rect,
    percentage,
    isActive,
  };
};

export default useScrollingVisibilityPercentage;
