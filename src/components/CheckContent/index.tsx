import React from "react";
import * as S from "./style";
import { IIcon } from "../../assets";
import { toast } from "react-toastify";
import Direction from "../Direction";
import { CheckoutContentProps } from "../../types/CheckoutContentProps";

const CheckoutContent = ({
  direction,
  onMouseEnter,
  onMouseLeave,
}: CheckoutContentProps) => {
  const directionSlice = direction?.slice(0, 1);

  return (
    <S.CheckoutContentWrapper
      direction={directionSlice}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <S.CheckoutContentContainer>
        <S.ContentContainer>
          <IIcon />

          <span>Are you sure to delete this task?</span>
        </S.ContentContainer>
        <S.CheckContainer>
          <S.CheckButton
            onClick={() =>
              toast.success("right tooltip confirm clicked on Yes.")
            }
          >
            Yes
          </S.CheckButton>
        </S.CheckContainer>
      </S.CheckoutContentContainer>
      <Direction
        direction={direction}
        directionSlice={directionSlice}
        contentType={"check"}
      />
    </S.CheckoutContentWrapper>
  );
};

export default CheckoutContent;
