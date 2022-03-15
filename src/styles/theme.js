const spacing = (t = 1, r, b, l) => {
  if (l !== undefined) return `${t * 8}px ${r * 8}px ${b * 8}px ${l * 8}px`;
  if (b !== undefined) return `${t * 8}px ${r * 8}px ${b * 8}px`;
  if (r !== undefined) return `${t * 8}px ${r * 8}px`;
  return `${t * 8}px`;
};

export const theme = {
  colors: {
    primary: "#242424",
    lightPrimary: "#4a4a4a",
    secondary: "#BE5A38",
    lightSecondary: "#FFCE9E",
    light: "#c1b4ae",
    red: "#a71313",
    lightGray: "#efefef",
    hoverGray: "#e7e7e7",
    disabledGray: "#b3b3b3",
  },
  fonts: ["Montserrat, sans-serif"],
  fontSizes: {
    h1: "6rem",
    h2: "3.75rem",
    h3: "3rem",
    h4: "2.125rem",
    h5: "1.5rem",
    h6: "1.25rem",
    subtitle1: "1rem",
    subtitle2: "0.875rem",
    subtitle3: "0.82rem",
    subtitle4: "0.65rem",
    body1: "1rem",
    body2: "0.875rem",
  },
  spacing,
};
