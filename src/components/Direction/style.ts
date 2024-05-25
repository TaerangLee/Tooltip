import styled from "@emotion/styled";

export const Direction = styled.div<{
  directionSlice: string | undefined;
  x: string | undefined;
  y: string | undefined;
}>`
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;
  border-left: 5px solid #1a2735;
  border-right: 5px solid transparent;

  transform: ${({ x, y, directionSlice }) =>
    `translateX(${x}px) translateY(${y}px)` +
    (directionSlice === "R"
      ? " rotate(180deg)"
      : directionSlice === "B"
      ? " rotate(270deg)"
      : directionSlice === "L"
      ? " rotate(0deg)"
      : " rotate(90deg)")};
`;
