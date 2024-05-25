import React from "react";

import * as S from "./style";
import { CheckContent, TooltipPosition } from "../../types/Direction";

const Direction = ({
  direction,
  directionSlice,
  contentType,
}: {
  direction: string | undefined;
  directionSlice: string | undefined;
  contentType?: string;
}) => {
  const positions = contentType === "check" ? CheckContent : TooltipPosition;
  const x = direction && positions[direction]?.x;
  const y = direction && positions[direction]?.y;

  console.log(x);
  console.log(y);

  return (
    <S.Direction x={x} y={y} directionSlice={directionSlice} content={contentType} />
  );
};

export default Direction;
