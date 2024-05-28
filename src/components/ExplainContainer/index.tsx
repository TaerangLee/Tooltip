import React from "react";

import * as S from "./style";
import Content from "../Content";
import { ExplainProps } from "../../types/ExplainProps";

const ExplainContainer = ({ onMouse, isHover, albeWord }: ExplainProps) => {
  return (
    <S.ExplainContainer onMouseEnter={onMouse} onMouseLeave={onMouse}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
      asperiores atque
      <S.ExplainContent>
        {isHover && albeWord === "Disable" && (
          <Content direction="Top" type="explain" />
        )}
      </S.ExplainContent>
    </S.ExplainContainer>
  );
};

export default ExplainContainer;
