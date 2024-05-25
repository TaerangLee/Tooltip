import styled from "@emotion/styled";

export const Section3Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 7rem;
  height: 1.125rem;
  border: 1px solid black;
  border-radius: 0.1875rem;
  outline: none;
  text-indent: 0.525rem;
  font-size: 14px;

  ::placeholder {
    font-size: 12px;
  }
`;

export const Search = styled.div`
  width: 1.325rem;
  height: 1.325rem;
  background-color: #00ca5b;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
