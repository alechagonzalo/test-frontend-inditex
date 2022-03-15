import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.1);
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border-left-color: ${({ color, theme }) => color ?? theme.colors.primary};

  animation: ${spin} 1s ease infinite;
`;
