import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

export const DragBox = ({ children }) => {
  const boxPos = useSpring({ x: 0, y: 0 });

  const bindBoxPos = useDrag((params) => {
    boxPos.x.set(params.offset[0]);
    boxPos.y.set(params.offset[1]);
  });

  return (
    <animated.div
      {...bindBoxPos()}
      style={{
        x: boxPos.x,
        y: boxPos.y,
      }}
    >
      {children}
    </animated.div>
  );
};