import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }: { children: React.ReactNode }) => {
  const el = document.querySelector("#modal");

  if (!el) {
    console.error("Modal root element not found");
    return null; // 또는 기본 루트 요소를 반환할 수 있습니다.
  }

  return ReactDOM.createPortal(children, el);
};

export default Portal;
