import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection ?? "column"};
  align-items: center;
  justify-content: center;
`;
