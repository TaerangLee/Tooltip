import React from "react";
import * as S from "./style";
import Direction from "../Direction";
import { ColorContentProps } from "../../types/ColorContentProps";

const ColorContent = ({ fontColor, children, color }: ColorContentProps) => {
  return (
    <S.ContentColorWrapper>
      <S.ContentContainer fontColor={fontColor} color={color}>
        <span>{children}</span>
      </S.ContentContainer>
      <Direction direction="Top" contentType="color" color={color} />
    </S.ContentColorWrapper>
  );
};

export default ColorContent;
