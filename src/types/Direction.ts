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
  TL: { x: "-25", y: "31" },
  Top: { x: "0", y: "31" },
  TR: { x: "25", y: "31" },
  RT: { x: "-39", y: "-17" },
  Right: { x: "-39", y: "0" },
  RB: { x: "-39", y: "17" },
  BR: { x: "25", y: "-31" },
  Bottom: { x: "0", y: "-31" },
  BL: { x: "-25", y: "-31" },
  LB: { x: "40", y: "17" },
  Left: { x: "40", y: "0" },
  LT: { x: "40", y: "-17" },
};

export const CheckContent: { [key: string]: { x: string; y: string } } = {
  Top: { x: "0", y: "44" },
  Right: { x: "-142", y: "0" },
  Bottom: { x: "0", y: "-44" },
  Left: { x: "142", y: "0" },
};
