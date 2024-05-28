import * as S from "./style";

import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "components";

// import { TooltipDirection } from "../../types/Direction";

const TooltipPage = () => {
  return (
    <S.TooltipWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
        <div style={{ display: "flex", gap: "70px" }}>
          <Section1 />
          <Section2 />
        </div>
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    </S.TooltipWrapper>
  );
};

export default TooltipPage;
