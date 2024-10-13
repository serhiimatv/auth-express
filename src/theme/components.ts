import { Components, Theme } from "@mui/material";

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: (theme: Theme) => ({
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Plus Jakarta Sans, sans-serif",
        color: theme.textColor,
      },
      body: {
        backgroundColor: theme.main,
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
      root: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.mainSideElements,
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        border: "solid 1px rgba(130, 143, 163, 0.25)",
        borderRadius: "4px",
        fontFamily: "Plus Jakarta Sans, sans-serif",
        "::placeholder": {
          fontFamily: "Plus Jakarta Sans, sans-serif",
        },
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
      root: ({ theme }: { theme: Theme }) => ({
        fontFamily: "Plus Jakarta Sans, sans-serif",
        color: theme.textColor,
        "::placeholder": {
          fontFamily: "Plus Jakarta Sans, sans-serif",
        },
      }),
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
  MuiSpeedDial: {
    styleOverrides: {
      root: {
        ".MuiSpeedDial-fab": {
          backgroundColor: "#635fc7",
          ":hover": {
            backgroundColor: "#a8a4ff",
          },
        },
      },
    },
  },
};
