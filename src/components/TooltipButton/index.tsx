// TooltipButton.js

import React, { useState } from "react";
import * as S from "./style";
import { TooltipProps } from "../../types/TooltipProps";
import Content from "../Content";

const TooltipButton = ({ children, width, color, direction }: TooltipProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <React.Fragment>
      <S.TooltipButtonWrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <S.TooltipButton width={width} color={color}>
          {children}
        </S.TooltipButton>
        <S.ContentWrapper direction={direction}>
          {isHover && <Content direction={direction} />}
        </S.ContentWrapper>
      </S.TooltipButtonWrapper>
    </React.Fragment>
  );
};

export default TooltipButton;
