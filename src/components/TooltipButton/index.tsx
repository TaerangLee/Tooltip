import React from "react";
import * as S from "./style";
import { TooltipProps } from "../../types/TooltipProps";

const TooltipButton = ({ children, width, color }: TooltipProps) => {
  return (
    <S.TooltipButton width={width} color={color}>
      {children}
    </S.TooltipButton>
  );
};

export default TooltipButton;
