import React from "react";

import * as S from "./style";
import { TooltipPosition } from "../../types/Direction";

const Direction = ({
  direction,
  directionSlice,
}: {
  direction: string | undefined;
  directionSlice: string | undefined;
}) => {
  const x = direction && TooltipPosition[direction]?.x;
  const y = direction && TooltipPosition[direction]?.y;

  console.log(x);
  console.log(y);

  return <S.Direction x={x} y={y} directionSlice={directionSlice} />;
};

export default Direction;
