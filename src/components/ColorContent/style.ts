import styled from "@emotion/styled";

export const ContentColorWrapper = styled.div`
  z-index: 2;
  width: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translateY(-45px);
`;

export const ContentContainer = styled.div<{
  //   direction: string | undefined;
  //   sideDirection: string | undefined;
  fontColor?: string;
  color?: string;
}>`
  width: auto;
  padding: 2px 8px;
  border-radius: 5px;
  background-color: ${(props) => (props.color ? props.color : "black")};

  display: flex;
  gap: 3px;

  span {
    color: ${(props) => (props.fontColor ? props.fontColor : "white")};
    font-size: 11px;

    display: flex;
    justify-content: center;
  }
`;
