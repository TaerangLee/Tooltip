import React, { useState } from "react";

import * as S from "./style";
import { TooltipButton, ExplainContainer } from "components";

type WordType = "Disable" | "Enable";

const Section6 = () => {
  const [isHover, setisHover] = useState<boolean>(false);
  const [isClick, setIsClick] = useState<boolean>(false);
  const [word, setWord] = useState<WordType>("Disable");

  return (
    <S.Section6Wrapper>
      <TooltipButton
        color="#333333"
        content="able"
        isClick={isClick}
        onClick={() => {
          setIsClick((prevIsClick) => !prevIsClick);
          setWord(isClick ? "Disable" : "Enable");
        }}
      >
        {word}
      </TooltipButton>
      <ExplainContainer
        onMouse={() => setisHover((prevIsHover) => !prevIsHover)}
        isHover={isHover}
        albeWord={word}
      />
    </S.Section6Wrapper>
  );
};

export default Section6;
