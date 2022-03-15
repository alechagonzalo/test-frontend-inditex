import styled from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;
  min-height: ${({ theme }) => theme.spacing(3)};
  width: ${({ width }) => width ?? "20ch"};
  background: ${({ color, theme }) => color ?? theme.colors.lightGray};
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.spacing(1, 1, 1, 1)};
  margin: ${({ theme }) => theme.spacing(0.5, 1, 0.5, 1)};
  padding: 8px;
  text-align: left;
  height: ${({ theme }) => theme.spacing(5)};
  position: relative;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  &:hover {
    background: ${({ hoverColor, theme }) =>
      hoverColor ?? theme.colors.hoverGray};
  }
  :disabled {
    cursor: not-allowed;
    background: ${({ color, theme }) => color ?? theme.colors.disabledGray};
  }
`;
