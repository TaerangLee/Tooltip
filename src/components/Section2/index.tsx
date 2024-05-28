import React from "react";

import * as S from "./style";
import { Section1 } from "components";

const Section2 = () => {
  return (
    <S.Section2Wrapper>
      <Section1 scroll="scroll" />
    </S.Section2Wrapper>
  );
};

export default Section2;
