import styled from "@emotion/styled";

export const Section1Wrapper = styled.div`
  width: 360px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBottomContainer = styled.div`
  display: flex;
  gap: 3px;
`;

export const SideContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LeftRightSide = styled.div`
  display: flex;
  gap: 3px;

  flex-direction: column;

  .LeftOnly {
    width: 100%;
  }
`;
