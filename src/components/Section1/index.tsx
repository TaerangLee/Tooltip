import React from "react";

import * as S from "./style";
import { TooltipDirection } from "types";

import { TooltipButton } from "components";

const Section1 = ({ scroll }: { scroll?: "scroll" }) => {
  const isScroll = scroll;

  return (
    <S.Section1Wrapper>
      <S.TopBottomContainer>
        <TooltipButton direction={TooltipDirection.TL} content={scroll}>
          {TooltipDirection.TL}
        </TooltipButton>
        <TooltipButton direction={TooltipDirection.Top} content={scroll}>
          {TooltipDirection.Top}
        </TooltipButton>
        <TooltipButton direction={TooltipDirection.TR} content={isScroll}>
          {TooltipDirection.TR}
        </TooltipButton>
      </S.TopBottomContainer>
      <S.SideContainer>
        <S.LeftRightSide className="LeftOnly">
          <TooltipButton direction={TooltipDirection.LT} content={isScroll}>
            {TooltipDirection.LT}
          </TooltipButton>
          <TooltipButton direction={TooltipDirection.Left} content={isScroll}>
            {TooltipDirection.Left}
          </TooltipButton>
          <TooltipButton direction={TooltipDirection.LB} content={isScroll}>
            {TooltipDirection.LB}
          </TooltipButton>
        </S.LeftRightSide>
        <S.LeftRightSide>
          <TooltipButton direction={TooltipDirection.RT} content={isScroll}>
            {TooltipDirection.RT}
          </TooltipButton>
          <TooltipButton direction={TooltipDirection.Right} content={isScroll}>
            {TooltipDirection.Right}
          </TooltipButton>
          <TooltipButton direction={TooltipDirection.RB} content={isScroll}>
            {TooltipDirection.RB}
          </TooltipButton>
        </S.LeftRightSide>
      </S.SideContainer>
      <S.TopBottomContainer>
        <TooltipButton direction={TooltipDirection.BL} content={isScroll}>
          {TooltipDirection.BL}
        </TooltipButton>
        <TooltipButton direction={TooltipDirection.Bottom} content={isScroll}>
          {TooltipDirection.Bottom}
        </TooltipButton>
        <TooltipButton direction={TooltipDirection.BR} content={isScroll}>
          {TooltipDirection.BR}
        </TooltipButton>
      </S.TopBottomContainer>
    </S.Section1Wrapper>
  );
};

export default Section1;
