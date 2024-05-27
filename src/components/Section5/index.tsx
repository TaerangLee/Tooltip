import React from "react";

import * as S from "./style";

import TooltipButton from "../TooltipButton";

const Section5 = () => {
  return (
    <S.Section5Wrapper>
      <TooltipButton color="pink" content="color">
        Pink
      </TooltipButton>
      <TooltipButton color="#fff1aa" fontColor="black" content="color">
        Yellow
      </TooltipButton>
    </S.Section5Wrapper>
  );
};

export default Section5;
