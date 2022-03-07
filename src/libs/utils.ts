import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";

// About User Interface
export const useCommonHooks = () => {
  return {
    isMobile: useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm")),
  };
};
