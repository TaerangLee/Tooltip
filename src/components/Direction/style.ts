import styled from "@emotion/styled";

export const Direction = styled.div<{
  directionSlice?: string;
  x?: string;
  y?: string;
  color?: string;
  content?: string;
}>`
  position: absolute;
  pointer-events: none;
  width: 0;
  height: 0;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-left: 5px solid
    ${(props) =>
      props.content
        ? props.content === "check"
          ? "white"
          : props.color
        : "#1a2735"};
  border-right: 5px solid transparent;
  z-index: -1;

  transform: ${({ x, y, directionSlice }) =>
    `translateX(${x}px) translateY(${y}px)` +
    (directionSlice === "R"
      ? " rotate(180deg)"
      : directionSlice === "B"
      ? " rotate(270deg)"
      : directionSlice === "L"
      ? " rotate(0deg)"
      : " rotate(90deg)")};

  ${
    (props) =>
      props.color &&
      `filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));` /* 삼각형 모양에 맞춘 그림자 효과 */
  }
`;
