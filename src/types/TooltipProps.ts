export interface TooltipProps {
  children: string; // 내부 적인 button 내용
  width: "short" | "long"; // 버튼을 한 개로 관리하기 위한 props types
  color?: string;
}
