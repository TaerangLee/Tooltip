import styled from "@emotion/styled";
import { TooltipProps } from "../../types/TooltipProps";

export const TooltipButtonWrapper = styled.div`
  position: relative;
`;

export const TooltipButton = styled.button<TooltipProps & { isClick: boolean }>`
  position: relative;
  background: ${(props) => props.color || "#1aab8a"};
  transition: background 0.5s ease;
  min-width: 70px;
  width: ${(props) => (props.width === "long" ? "150px" : "auto")};
  height: 20px;
  color: ${(props) => (props.fontColor ? props.fontColor : "#ffffff")};
  border: none;
  cursor: pointer;
  font-weight: 500;
  padding: 2px 0;
  border-radius: 5px;
  font-size: 14px;
  z-index: 1;
  opacity: ${(props) => (props.isClick ? "40%" : "none")};

  &:hover {
    background-color: white;
    color: ${(props) => props.color || "#178f6f"};
  }

  &::before,
  &::after {
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
    position: absolute;
  }
`;

export const ContainerWrapper = styled.div<{ content?: string }>`
  position: ${(props) => (props.content === "scroll" ? "fixed" : "relative")};
  z-index: 3;
`;

export const ContentContainer = styled.div<{
  direction?: string;
  width?: string;
}>`
  position: absolute;
  bottom: ${(props) =>
    props.direction === "Left" || props.direction === "Right"
      ? "17px"
      : props.direction === "LB" || props.direction === "RB"
      ? "34px"
      : 0};
  z-index: 100;

  transform: ${(props) =>
    props.width === "long" &&
    (props.direction === "Top" || props.direction === "TR")
      ? props.direction === "Top"
        ? "translateX(40px)"
        : "translateX(80px)"
      : "none"};
`;
