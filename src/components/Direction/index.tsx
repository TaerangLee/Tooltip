import React from "react";
import * as S from "./style";
import {
  CheckContentPosition,
  ColorContentPosition,
  TooltipPosition,
} from "../../types/Direction";

const Direction = ({
  direction,
  directionSlice,
  contentType,
  color,
}: {
  direction?: string;
  directionSlice?: string;
  contentType?: string;
  color?: string;
}) => {
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
