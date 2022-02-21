import { Drawer as MuiDrawer, Theme, useMediaQuery } from "@mui/material";
import { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { ReactNode, VFC } from "react";
import { StyleConst } from "../../../constants/styleConstants";
import { DrawerContents } from "./Contents";

const BaseDrawer: VFC<MuiDrawerProps> = (props) => {
  return (
    <MuiDrawer
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
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return isMobile ? (
    <BaseDrawer
      variant="temporary"
      children={children}
      open={isOpen}
      onClose={onClose}
    />
  ) : (
    <BaseDrawer
      variant="permanent"
      ModalProps={{ keepMounted: true }}
      children={children}
    />
  );
};

export const Drawer: VFC<{
  isOpen: boolean;
  onClose: MuiDrawerProps["onClose"];
}> = ({ isOpen, onClose }) => (
  <DrawerFrame
    isOpen={isOpen}
    onClose={onClose}
    children={<DrawerContents />}
  />
);
