import React from "react";
import * as S from "./style";
import {
  CheckContentPosition,
  ColorContentPosition,
  TooltipPosition,
} from "types";
import { DirectionProps } from "types";

const Direction = ({
  direction,
  directionSlice,
  contentType,
  color,
}: DirectionProps) => {
  const positions = contentType
    ? contentType === "check"
      ? CheckContentPosition
      : ColorContentPosition
    : TooltipPosition;

  const x = direction && positions[direction]?.x;
  const y = direction && positions[direction]?.y;

  return (
    <S.Direction
      x={x}
      y={y}
      directionSlice={directionSlice}
      content={contentType}
      color={color}
    />
  );
};

export default Direction;
