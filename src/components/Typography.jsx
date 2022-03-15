import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "@/styles/theme";

export const Typography = styled.div`
  font-size: ${({ fontSize, theme }) =>
    theme.fontSizes[fontSize] || theme.fontSizes.h1};
  font-family: ${({ theme }) => theme.fonts[0]};
  color: ${(p) => p.color ?? p.theme.colors.primary};
  margin: ${(p) => p.margin ?? p.theme.spacing(0.5, 0, 0.5, 0)};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "normal")};
  text-transform: ${(p) => (p.textTransform ? p.textTransform : "none")};
`;

Typography.propTypes = {
  fontSize: PropTypes.oneOf(Object.keys(theme.fontSizes)),
};
