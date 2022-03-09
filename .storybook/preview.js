import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { themeWithComponentStyles } from "../src/constants/theme";
import { VIEWPORTS } from "./viewports";

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={themeWithComponentStyles}>
    <CssBaseline />
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: VIEWPORTS,
    defaultViewport: "Laptop",
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
