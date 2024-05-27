import React, { useState } from "react";

import * as S from "./style";
import TooltipButton from "../TooltipButton";
import ExplainContainer from "../ExplainContainer";

const Section6 = () => {
  const [isHover, setisHover] = useState<boolean>(false);

  const handleMouse = () => {
    setisHover((prevIsClick) => !prevIsClick);
  };
  return (
    <S.Section6Wrapper>
      <TooltipButton color="#333333" content="able">
        Disable
      </TooltipButton>
      <ExplainContainer onMouse={handleMouse} isHover={isHover} />
    </S.Section6Wrapper>
  );
};

export default Section6;
