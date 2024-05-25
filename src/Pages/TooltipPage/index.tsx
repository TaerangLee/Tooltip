import * as S from "./style";

import { Section1 } from "../../components";

// import { TooltipDirection } from "../../types/Direction";

const TooltipPage = () => {
  return (
    <S.TooltipWrapper>
      <div>
        {/* <TooltipButton width="long">enter-delay 1s</TooltipButton> */}
        <div style={{ display: "flex" }}>
          <Section1 />
        </div>
      </div>
    </S.TooltipWrapper>
  );
};

export default TooltipPage;
