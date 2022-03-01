import { fontSizes } from "./typography";

const spacing = (t = 1, r, b, l) => {
  if (l !== undefined) return `${t * 8}px ${r * 8}px ${b * 8}px ${l * 8}px`;
  if (b !== undefined) return `${t * 8}px ${r * 8}px ${b * 8}px`;
  if (r !== undefined) return `${t * 8}px ${r * 8}px`;
  return `${t * 8}px`;
};

export const theme = {
  palette: {
    primary: {
      main: "black",
      light: "white",
    },
    secondary: {
      main: "gray",
      light: "white",
    },
    info: {
      main: "white",
    },
    warning: {
      main: "red",
    },
  },
  colors: {
    primary: "#242424",
    secondary: "#BE5A38",
    lightSecondary: "#FFCE9E",
    graySecondary: "#be7c4d",
    light: "#c1b4ae",
    red: "#92140c",
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    lightGray: "#eaeaea",
  },
  fonts: ["Montserrat, sans-serif"],
  fontSizes: fontSizes,
  spacing,
};
