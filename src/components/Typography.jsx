import styled from "styled-components";

export const Typography = styled.div`
  font-size: ${({ fontSize, theme }) =>
    theme.fontSizes[fontSize] || theme.fontSizes.h1};
  font-family: ${({ theme }) => theme.fonts[0]};
  color: ${(p) => p.color ?? p.theme.colors.primary};
  margin: ${(p) => p.margin ?? p.theme.spacing(0.5, 0, 0.5, 0)};
`;
