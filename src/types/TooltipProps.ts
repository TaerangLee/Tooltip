export interface TooltipProps {
  children: React.ReactNode;
  width?: "long";
  color?: string;
  direction?: string;
  number?: number;
  type?: "enter-delay" | "leave-delay";
  content?: "check" | "color" | "able" | "scroll";
  fontColor?: string;
  isClick?: boolean;
  onClick?: () => void;
  // isClick?: boolean;
}
