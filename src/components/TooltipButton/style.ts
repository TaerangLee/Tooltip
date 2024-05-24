import styled from "@emotion/styled";
import { TooltipProps } from "../../types/TooltipProps";

export const TooltipButton = styled.button<TooltipProps>`
  position: relative;
  background: ${(props) => props.color || "#1aab8a"};
  width: ${(props) => (props.width === "long" ? "150px" : "70px")};
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
