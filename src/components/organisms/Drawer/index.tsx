import { Drawer as MuiDrawer, Theme, useMediaQuery } from "@mui/material";
import { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { ReactNode, VFC } from "react";
import { DrawerContents } from "./Contents";

const BaseDrawer: VFC<MuiDrawerProps> = (props) => {
  return (
    <MuiDrawer
      PaperProps={{
        sx: {
          width: 240,
          backgroundColor: "#031525",
        },
      }}
      {...props}
    />
  );
};

const DrawerFrame: VFC<{ children: ReactNode; isOpen: boolean }> = ({
  children,
  isOpen,
}) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return isMobile ? (
    <BaseDrawer variant="temporary" children={children} open={isOpen} />
  ) : (
    <BaseDrawer
      variant="permanent"
      ModalProps={{ keepMounted: true }}
      children={children}
    />
  );
};

export const Drawer: VFC<{ isOpen: boolean }> = ({ isOpen }) => (
  <DrawerFrame isOpen={isOpen} children={<DrawerContents />} />
);
