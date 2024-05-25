import styled from "@emotion/styled";
import { TooltipProps } from "../../types/TooltipProps";

export const TooltipButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipButton = styled.button<TooltipProps>`
  position: relative;
  background: ${(props) => props.color || "#1aab8a"};
  transition: background 0.5s ease;
  width: ${(props) => (props.width === "long" ? "150px" : "70px")};
  height: 20px;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: 2px 0;
  border-radius: 5px;
  font-size: 15px;

  &:hover {
    background-color: white;
    color: ${(props) => props.color || "#178f6f"};
  }

  &::before,
  ::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0;
    background: ${(props) => props.color || "#178f6f"};
    transition: width 800ms ease;
  }

  &::before {
    top: 0;
    right: 0;
  }

  &::after {
    bottom: 0;
    left: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div<{ direction: string | undefined }>`
  position: relative;
  bottom: ${(props) =>
    props.direction === "Left" || props.direction === "Right"
      ? "17px"
      : props.direction === "LB" || props.direction === "RB"
      ? "34px"
      : 0};
`;
