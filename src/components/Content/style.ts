import styled from "@emotion/styled";

export const ContentWrapper = styled.div<{
  direction: string | undefined;
  sideDirection: string | undefined;
}>`
  width: 70px;
  background-color: #1a2735;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: ${(props) =>
    props.direction === "B"
      ? "translateY(10px)"
      : props.direction === "L"
      ? "translateX(-80px) translateY(-20px)"
      : props.direction === "R"
      ? "translateX(80px) translateY(-20px)"
      : "translateY(-80px)"}; 

`;

export const ContentContainer = styled.div`
  width: 62px;
  padding: 5px 4px 7px 4px;
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
