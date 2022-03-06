import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: {
      light: "#63CCFF",
      main: "#009BE5",
      dark: "#006DB3",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

export const themeWithComponentStyles = {
  ...baseTheme,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          boxShadow: "none",
          "&:active": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: baseTheme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#4fc3f7",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: baseTheme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: "auto",
          marginRight: baseTheme.spacing(2),
          "& svg": {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: baseTheme.palette.error.main,
          "&$error": {
            color: baseTheme.palette.error.main,
          },
        },
      },
    },
  },
};
