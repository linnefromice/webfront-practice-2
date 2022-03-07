import { Drawer as MuiDrawer } from "@mui/material";
import { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { ReactNode, VFC } from "react";
import { StyleConst } from "../../../constants/styleConstants";
import { useCommonHooks } from "../../../libs/utils";
import { DrawerContents } from "./Contents";

const BaseDrawer: VFC<MuiDrawerProps> = (props) => {
  return (
    <MuiDrawer
      sx={{
        width: StyleConst.DRAWER_WIDTH,
      }}
      PaperProps={{
        sx: {
          width: StyleConst.DRAWER_WIDTH,
          backgroundColor: "#031525",
        },
      }}
      {...props}
    />
  );
};

const DrawerFrame: VFC<{
  children: ReactNode;
  isOpen: boolean;
  onClose: MuiDrawerProps["onClose"];
}> = ({ children, isOpen, onClose }) => {
  const { isMobile } = useCommonHooks();

  return isMobile ? (
    <BaseDrawer variant="temporary" open={isOpen} onClose={onClose}>
      {children}
    </BaseDrawer>
  ) : (
    <BaseDrawer variant="permanent" ModalProps={{ keepMounted: true }}>
      {children}
    </BaseDrawer>
  );
};

export const Drawer: VFC<{
  isOpen: boolean;
  onClose: MuiDrawerProps["onClose"];
}> = ({ isOpen, onClose }) => (
  <DrawerFrame isOpen={isOpen} onClose={onClose}>
    <DrawerContents />
  </DrawerFrame>
);
