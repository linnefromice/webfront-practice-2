import { ViewportMap } from "@storybook/addon-viewport/dist/ts3.9/models/Viewport";

export const VIEWPORTS: ViewportMap = {
  Desktop: {
    name: "Desktop",
    styles: {
      width: "1920px",
      height: "1080px",
    },
    type: "desktop",
  },
  Laptop: {
    name: "Laptop",
    styles: {
      width: "1280px",
      height: "720px",
    },
    type: "desktop",
  },
  Mobile: {
    name: "Mobile",
    styles: {
      width: "320px",
      height: "568px",
    },
    type: "mobile",
  },
};
