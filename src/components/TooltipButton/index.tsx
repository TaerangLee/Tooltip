import React, { useState, useRef } from "react";
import * as S from "./style";
import { TooltipProps } from "../../types/TooltipProps";
import Content from "../Content";
import CheckoutContent from "../CheckContent";
import ColorContent from "../ColorContent";

const TooltipButton = ({
  children,
  width,
  color,
  direction = "Top",
  number,
  type,
  content,
  fontColor,
}: TooltipProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [checkHover, setCheckHover] = useState<boolean>(false);

  const Timeout = useRef<NodeJS.Timeout | null>(null);

  const handleClickContent = () => {
    if (content === "able") {
      setIsClick((prevIsClick) => !prevIsClick);
    }
  };

  const handleEnterContent = () => {
    if (Timeout.current) {
      clearTimeout(Timeout.current);
      Timeout.current = null;
    }

    if (type === "enter-delay" && number) {
      Timeout.current = setTimeout(() => {
        setIsHover(true);
        Timeout.current = null;
      }, number * 1000);
    } else {
      setIsHover(true);
    }
  };

  const handleLeaveContent = () => {
    if (Timeout.current) {
      clearTimeout(Timeout.current);
      Timeout.current = null;
    }

    if (type === "leave-delay" && number) {
      Timeout.current = setTimeout(() => {
        setIsHover(false);
        Timeout.current = null;
      }, number * 1000);
    } else if (!type && number) {
      Timeout.current = setTimeout(() => {
        setIsHover(false);
        Timeout.current = null;
      }, number * 1000);
    } else {
      setIsHover(false);
    }
  };

  return (
    <S.TooltipButtonWrapper>
      <S.TooltipButton
        width={width}
        color={color}
        isClick={isClick}
        onMouseEnter={handleEnterContent}
        onMouseLeave={handleLeaveContent}
        onClick={handleClickContent}
        fontColor={fontColor}
      >
        {children}
      </S.TooltipButton>
      <S.ContainerWrapper content={content}>
        <S.ContentContainer direction={direction} width={width}>
          {(isHover || checkHover) && content !== "able" && (
            <>
              {content === "check" ? (
                <CheckoutContent
                  direction={direction}
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setCheckHover(false);
                    }, 500);
                  }}
                  onMouseEnter={() => setCheckHover(true)}
                />
              ) : content === "color" ? (
                <ColorContent
                  fontColor={fontColor}
                  children={String(children)}
                  color={color}
                />
              ) : (
                <Content direction={direction} />
              )}
            </>
          )}
        </S.ContentContainer>
      </S.ContainerWrapper>
    </S.TooltipButtonWrapper>
  );
};

export default TooltipButton;
