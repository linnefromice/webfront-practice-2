import { ReactNode, VFC } from "react";
import { useDrawerState } from "../../../libs/stores/useDrawer";
import { AppBar } from "../AppBar";
import { Drawer } from "../Drawer";

export const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, open, close } = useDrawerState();

  return (
    <>
      <Drawer isOpen={isOpen} onClose={close} />
      <AppBar openDrawer={open} />
      {children}
    </>
  );
};
