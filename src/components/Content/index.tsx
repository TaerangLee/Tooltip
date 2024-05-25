import React from "react";

import * as S from "./style";
import Direction from "../Direction";

const Content = ({ direction }: { direction: string | undefined }) => {
  const directionSlice = direction?.slice(0, 1);
  console.log(directionSlice);

  return (
    <>
      <S.ContentWrapper direction={directionSlice} sideDirection={direction}>
        <S.ContentContainer>
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </S.ContentContainer>
        <Direction direction={direction} directionSlice={directionSlice}/>
      </S.ContentWrapper>
    </>
  );
};

export default Content;
