import { Box } from "@mui/material";
import { StyleConst } from "constants/styleConstants";
import { useDrawerState } from "libs/stores/useDrawer";
import { ReactNode, VFC } from "react";
import { AppBar } from "../AppBar";
import { Drawer } from "../Drawer";

export const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, open, close } = useDrawerState();

  return (
    <>
      <AppBar openDrawer={open} />
      <Box height={StyleConst.APP_BAR_HEIGHT} width="100vw" />
      <Box sx={{ display: "flex" }}>
        <Drawer isOpen={isOpen} onClose={close} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginLeft: 8,
            marginRight: 8,
            marginTop: 4,
            marginBottom: 4,
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
