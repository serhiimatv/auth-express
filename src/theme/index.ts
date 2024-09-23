import { createTheme } from "@mui/material";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "primary-l": true;
  }
}
//винести компоненти по файлам
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          color: "#000000",
        },
        body: {
          backgroundColor: "#FFFFFF",
        },
      },
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
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "Plus Jakarta Sans, sans-serif",
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
