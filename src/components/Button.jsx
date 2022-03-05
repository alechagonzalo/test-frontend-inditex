import styled from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  min-height: ${({ theme }) => theme.spacing(3)};
  width: ${({ width }) => width ?? "20ch"};
  background: ${({ color, theme }) => color ?? theme.colors.lightGray};
  box-shadow: -1px 45px 78px -20px rgba(0, 0, 0, 0.58);
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.spacing(1, 1, 1, 1)};
  margin: ${({ theme }) => theme.spacing(0.5, 1, 0.5, 1)};
  padding: 8px;
  text-align: left;
  height: ${({ theme }) => theme.spacing(5)};
  position: relative;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background: ${({ hoverColor, theme }) =>
      hoverColor ?? theme.colors.hoverGray};
  }
`;
