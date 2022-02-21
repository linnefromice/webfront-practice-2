import { Drawer as MuiDrawer, Theme, useMediaQuery } from "@mui/material";
import { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import { ReactNode, VFC } from "react";

const BaseDrawer: VFC<MuiDrawerProps> = (props) => {
  return (
    <MuiDrawer
      PaperProps={{
        sx: {
          width: 240,
        },
      }}
      {...props}
    />
  );
};

export const Drawer: VFC<{ children: ReactNode; isOpen: boolean }> = ({
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
