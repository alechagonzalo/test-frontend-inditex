import styled from "styled-components";

const CircleColor = styled.button`
  border-radius: 100px;
  background-color: ${({ color }) => color};
  width: ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${(p) => p.theme.colors.lightPrimary};
  margin: ${({ theme }) => theme.spacing(0.5)};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Color = ({ color }) => {
  return <CircleColor color={color} />;
};
