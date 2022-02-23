import { atom, useRecoilState } from "recoil";

const drawerState = atom<boolean>({
  key: "drawerState",
  default: false,
});

export const useDrawerState = () => {
  const [state, setState] = useRecoilState(drawerState);

  const open = () => setState(true);
  const close = () => setState(false);

  return {
    isOpen: state,
    open,
    close,
  };
};
