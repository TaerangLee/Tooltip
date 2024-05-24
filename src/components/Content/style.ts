import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  width: 70px;
  background-color: #1a2735;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 62px;
  padding: 3px 4px 5px 4px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  span {
    color: white;
    font-size: 10px;
    display: flex;
    justify-content: center;
  }
`;
