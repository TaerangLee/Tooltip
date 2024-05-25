// TooltipButton.js

import React, { useState } from "react";
import * as S from "./style";
import { TooltipProps } from "../../types/TooltipProps";
import Content from "../Content";
import CheckoutContent from "../CheckContent";

const TooltipButton = ({
  children,
  width,
  color,
  direction,
  number,
  type,
  content,
}: TooltipProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [checkHover, setCheckHover] = useState<boolean>(false);

  const handleEnterContent = () => {
    if (type === "enter-delay" && number) {
      setTimeout(() => {
        setIsHover(true);
      }, number * 1000);
    } else {
      setIsHover(true);
    }
  };

  const handleLeaveContent = () => {
    if (type === "leave-delay" && number) {
      setTimeout(() => {
        setIsHover(false);
      }, number * 1000);
    } else if (!type && number) {
      setTimeout(() => {
        setIsHover(false);
      }, number * 1000);
    } else {
      setIsHover(false);
    }
  };

  return (
    <>
      <S.TooltipButtonWrapper>
        <S.TooltipButton
          width={width}
          color={color}
          onMouseEnter={handleEnterContent}
          onMouseLeave={handleLeaveContent}
        >
          {children}
        </S.TooltipButton>
        <S.ContentWrapper direction={direction} width={width}>
          {(isHover || checkHover) &&
            (content === "check" ? (
              <CheckoutContent
                direction={direction}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setCheckHover(false);
                  }, 500);
                }}
                onMouseEnter={() => setCheckHover(true)}
              />
            ) : (
              <Content direction={direction} />
            ))}
        </S.ContentWrapper>
      </S.TooltipButtonWrapper>
    </>
  );
};

export default TooltipButton;
