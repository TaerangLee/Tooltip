import styled from "@emotion/styled";

export const CheckoutContentWrapper = styled.div<{ direction?: string }>`
  width: 274px;
  height: 78px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.1215686275),
    0 6px 16px rgba(0, 0, 0, 0.0784313725),
    0 9px 28px 8px rgba(0, 0, 0, 0.0509803922);
  color: #999;
  position: absolute;

  transform: ${(props) =>
    props.direction === "B"
      ? "translateY(10px) translateX(-100px)"
      : props.direction === "L"
      ? "translateX(-300px) translateY(-30px)"
      : props.direction === "R"
      ? "translateX(90px) translateY(-30px)"
      : "translateY(-110px) translateX(-100px)"};
`;

export const CheckoutContentContainer = styled.div`
  width: 240px;
  height: 74px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;

  span {
    font-size: 15px;
  }
`;

export const CheckContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CheckButton = styled.button`
  color: black;
  width: 34px;
  height: 17px;
  cursor: pointer;
  background-color: #1aab8a;
  border-radius: 3px;
  border: none;
`;
