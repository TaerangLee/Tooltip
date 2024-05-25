export enum TooltipDirection {
  TL = "TL",
  Top = "Top",
  TR = "TR",
  RT = "RT",
  Right = "Right",
  RB = "RB",
  BR = "BR",
  Bottom = "Bottom",
  BL = "BL",
  LB = "LB",
  Left = "Left",
  LT = "LT",
}

export const TooltipPosition: { [key: string]: { x: string; y: string } } = {
  TL: { x: "0", y: "32" },
  Top: { x: "-25", y: "32" },
  TR: { x: "25", y: "32" },
  RT: { x: "-40", y: "-17" },
  Right: { x: "-40", y: "0" },
  RB: { x: "-40", y: "17" },
  BR: { x: "25", y: "-32" },
  Bottom: { x: "0", y: "-32" },
  BL: { x: "-25", y: "-32" },
  LB: { x: "40.1", y: "17" },
  Left: { x: "40.1", y: "0" },
  LT: { x: "40.1", y: "-17" },
};
