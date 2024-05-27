import styled from "@emotion/styled";

export const FontContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

export const ContentContainer = styled.div<{ type?: string }>`
  width: auto;
  min-width: ${(props) => (props.type ? "200px" : "none")};
  min-height: 40px;
  padding: 5px 4px 7px 5px;
  display: flex;

  span {
    color: white;
    font-size: 10px;
    display: flex;
    justify-content: center;
  }
`;
export const ContentWrapper = styled.div<{
  direction: string | undefined;
  sideDirection: string | undefined;
}>`
  min-width: 70px;
  width: auto;
  z-index: 1;

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
