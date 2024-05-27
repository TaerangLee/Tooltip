import React from "react";

import * as S from "./style";
import Direction from "../Direction";

const Content = ({
  direction,
  type,
}: {
  direction?: string;
  type?: string;
}) => {
  const directionSlice = direction?.slice(0, 1);

  return (
    <>
      <S.ContentWrapper direction={directionSlice} sideDirection={direction}>
        <S.ContentContainer type={type}>
          {type ? (
            <S.FontContainer>
              <span> Lorem ipsum dolor sit amet, </span>
              <span> consectetur adipisicing elit. Adipisci</span>
              <span>asperiores atque</span>
            </S.FontContainer>
          ) : (
            <S.FontContainer>
              <span>prompt tasd</span>
              <span>prompt tasd</span>
              <span>prompt tasd</span>
            </S.FontContainer>
          )}
        </S.ContentContainer>
        <Direction direction={direction} directionSlice={directionSlice} />
      </S.ContentWrapper>
    </>
  );
};

export default Content;
