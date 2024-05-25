import React from "react";

import * as S from "./style";
import TooltipButton from "../TooltipButton";

const Section4 = () => {
  return (
    <S.Section4Wrapper>
      <S.SectionTopBottomContainer>
        <TooltipButton direction="Top" content="check" number={0.5}>
          Top
        </TooltipButton>
      </S.SectionTopBottomContainer>
      <S.SectionSideContainer>
        <TooltipButton direction="Left" content="check" number={0.5}>
          Left
        </TooltipButton>
        <TooltipButton direction="Right" content="check" number={0.5}>
          Right
        </TooltipButton>
      </S.SectionSideContainer>
      <S.SectionTopBottomContainer>
        <TooltipButton direction="Bottom" content="check" number={0.5}>
          Bottom
        </TooltipButton>
      </S.SectionTopBottomContainer>
    </S.Section4Wrapper>
  );
};

export default Section4;
