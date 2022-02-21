import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  AppBar as MuiAppBar,
  Avatar,
  IconButton,
  Stack,
  Theme,
  Toolbar,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { ReactNode, VFC } from "react";
import { StyleConst } from "../../../constants/styleConstants";

const AppBarFrame: VFC<{ children: ReactNode }> = ({ children }) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: isMobile
          ? "100vw"
          : `calc(100vw - ${StyleConst.DRAWER_WIDTH}px)`,
        height: 64,
      }}
    >
      <Toolbar sx={{ width: "100%", height: "100%" }}>{children}</Toolbar>
    </MuiAppBar>
  );
};

export const AppBar: VFC<{ openDrawer: () => void }> = ({ openDrawer }) => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <AppBarFrame>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ width: "100%", height: "100%" }}
        >
          {isMobile && (
            <Tooltip title="Menu">
              <IconButton sx={{ ml: 1 }} onClick={openDrawer}>
                <MenuOpenIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ width: "100%", height: "100%" }}
        >
          <Tooltip
            title="Account Name"
            placement="bottom"
            disableFocusListener
            disableTouchListener
          >
            <Avatar>A</Avatar>
          </Tooltip>
        </Stack>
      </Stack>
    </AppBarFrame>
  );
};
