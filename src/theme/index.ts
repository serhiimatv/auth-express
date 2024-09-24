import { createTheme } from "@mui/material";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "primary-l": true;
  }
}
declare module "@mui/material/styles" {
  interface PaletteOptions {
    main: string;
    mainSideElements: string;
    textLinkColor: string;
  }
  interface Palette {
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
      palette: {
        main: "#F4F7FD",
        mainSideElements: "#FFFFFF",
        textLinkColor: "#635fc7",
      },
    },
    dark: {
      palette: {
        main: "#20212C",
        mainSideElements: "#2B2C37",
        textLinkColor: "#FFFFFF",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        },
        body: {
          backgroundColor: theme.vars.palette.main,
        },
      }),
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 24,
          fontWeight: 700,
          lineHeight: "30px",
          fontFamily: "Plus Jakarta Sans, sans-serif",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars.palette.mainSideElements,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "solid 1px rgba(130, 143, 163, 0.25)",
          borderRadius: "4px",
        },
        root: {
          padding: 0,
          height: "40px",
          maxWidth: "350px",
          width: "100%",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "solid 1px rgba(130, 143, 163, 0.25)",
          },
          ":hover .MuiOutlinedInput-notchedOutline": {
            border: "solid 1px rgba(130, 143, 163, 0.25)",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "Plus Jakarta Sans, sans-serif",
          "::placeholder": {
            fontFamily: "Plus Jakarta Sans, sans-serif",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "primary-l" },
              style: {
                width: "255px",
                height: "48px",
                padding: "15px 61.5px 14px",
                borderRadius: "24px",
                backgroundColor: "#635fc7",
                color: "#FFFFFF",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                ":hover": {
                  backgroundColor: "#a8a4ff",
                },
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
