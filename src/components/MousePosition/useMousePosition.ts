import React from "react";
import { MaybePosition } from "./types";

export const MousePositionCtx = React.createContext<MaybePosition>(null);

const useMousePosition = () => {
  const pos = React.useContext(MousePositionCtx);
  return pos;
};

export default useMousePosition;
