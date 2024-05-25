import React, { useState } from "react";
import * as S from "./style";
import TooltipButton from "../TooltipButton";
import SearchIcon from "../../assets/SearchIcon";

const Section3 = () => {
  const [count, setCount] = useState<number>(1);
  const [inputValue, setInputValue] = useState<number | string>(1);

  const handleNewCount = () => {
    const newCount = Number(inputValue);
    if (!isNaN(newCount) && newCount > 0) {
      setCount(newCount);
    }
  };

  return (
    <S.Section3Wrapper>
      <S.SearchContainer>
        <S.SearchInput
          placeholder="내가 초 지정할래!"
          type="number"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <S.Search onClick={handleNewCount}>
          <SearchIcon />
        </S.Search>
      </S.SearchContainer>
      <TooltipButton
        width="long"
        direction="TL"
        number={count}
        type="enter-delay"
      >
        enter-delay {count}s
      </TooltipButton>
      <TooltipButton
        width="long"
        direction="Top"
        number={count}
        type="leave-delay"
      >
        leave-delay {count}s
      </TooltipButton>
      <TooltipButton width="long" direction="TR" number={0.5}>
        hover not hidden
      </TooltipButton>
    </S.Section3Wrapper>
  );
};

export default Section3;
