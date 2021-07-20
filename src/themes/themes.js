import { createTheme } from "@material-ui/core/styles";
const typography = {
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "\"Segoe UI\"",
    "Roboto",
    "\"Helvetica Neue\"",
    "Arial",
    "sans-serif",
    "\"Apple Color Emoji\"",
    "\"Segoe UI Emoji\"",
    "\"Segoe UI Symbol\"",
  ].join(","),
};

const themes = {
  default: createTheme({ ...typography }),
};

export default themes;
