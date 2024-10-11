import { createTheme } from "@mui/material";
import { components } from "./components";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "primary-l": true;
  }
}

declare module "@mui/material/styles" {
  interface ColorSystemOptions {
    textColor: string;
    main: string;
    mainSideElements: string;
    textLinkColor: string;
  }
}

//винести компоненти по файлам
const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      textColor: "#000000",
      main: "#F4F7FD",
      mainSideElements: "#FFFFFF",
      textLinkColor: "#635fc7",
    },
    dark: {
      textColor: "#FFFFFF",
      main: "#20212C",
      mainSideElements: "#2B2C37",
      textLinkColor: "#FFFFFF",
    },
  },
  components: components,
});

export default theme;
