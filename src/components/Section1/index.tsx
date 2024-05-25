import React from "react";

import * as S from "./style";
import { TooltipDirection } from "../../types/Direction";

import TooltipButton from "../TooltipButton";

const Section1 = () => {
  // 기본 방향은 Top으로 설정이 되어있어 props를 따로 안 넘겨도 됨
  return (
    <S.Section1Wrapper>
      <S.TopBottomContainer>
        <TooltipButton direction={TooltipDirection.TL}>
          {TooltipDirection.TL}
        </TooltipButton>
        <TooltipButton direction={TooltipDirection.Top}>
          {TooltipDirection.Top}
        </TooltipButton>
        <TooltipButton direction={TooltipDirection.TR}>
          {TooltipDirection.TR}
        </TooltipButton>
      </S.TopBottomContainer>
      <S.SideContainer>
        <S.LeftRightSide className="LeftOnly">
          <TooltipButton direction={TooltipDirection.LT}>
            {TooltipDirection.LT}
          </TooltipButton>
          <TooltipButton direction={TooltipDirection.Left}>
            {TooltipDirection.Left}
          </TooltipButton>
          <TooltipButton direction={TooltipDirection.LB}>
            {TooltipDirection.LB}
          </TooltipButton>
        </S.LeftRightSide>
        <S.LeftRightSide>
          <TooltipButton direction={TooltipDirection.RT}>
            {TooltipDirection.RT}
          </TooltipButton>
          <TooltipButton direction={TooltipDirection.Right}>
            {TooltipDirection.Right}
          </TooltipButton>
          <TooltipButton direction={TooltipDirection.RB}>
            {TooltipDirection.RB}
          </TooltipButton>
        </S.LeftRightSide>
      </S.SideContainer>
      <S.TopBottomContainer>
        <TooltipButton direction={TooltipDirection.BL}>
          {TooltipDirection.BL}
        </TooltipButton>
        <TooltipButton direction={TooltipDirection.Bottom}>
          {TooltipDirection.Bottom}
        </TooltipButton>
        <TooltipButton direction={TooltipDirection.BR}>
          {TooltipDirection.BR}
        </TooltipButton>
      </S.TopBottomContainer>
    </S.Section1Wrapper>
  );
};

export default Section1;
