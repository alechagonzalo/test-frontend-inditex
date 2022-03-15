import styled, { keyframes } from "styled-components";

const Keyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FadeImage = styled.img`
  animation: ${Keyframes} 300ms linear;
`;
