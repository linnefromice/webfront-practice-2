import ListAltIcon from "@mui/icons-material/ListAlt";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import Link from "components/uiParts/Link";
import { ReactNode, VFC } from "react";

const items: { icon: ReactNode; url?: string; label: string }[] = [
  {
    icon: <ListAltIcon />,
    url: "/paidMemberMng/matterForm/create",
    label: "案件情報",
  },
  { icon: <ListAltIcon />, label: "コンサルティング" },
  { icon: <ListAltIcon />, label: "マッチング" },
  { icon: <ListAltIcon />, label: "マッチング成果報告" },
];

export const DrawerContents: VFC = () => {
  return (
    <>
      <Stack justifyContent="center" alignItems="center">
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ color: "#FFFFFF" }}
        >
          Onlystory
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
          sx={{ color: "#999999" }}
        >
          inhouse app
        </Typography>
      </Stack>
      <Divider sx={{ backgroundColor: "#FFFFFF" }} />
      <List
        subheader={
          <ListSubheader sx={{ background: "#031525", color: "#FFFFFF" }}>
            有料会員管理
          </ListSubheader>
        }
      >
        {items.map((item, index) => (
          <ListItemButton
            key={`drawer.item.${index}`}
            sx={{
              maxHeight: 48,
              color: "#FFFFFF",
              "&:hover": {
                background: "#0c2d48",
                // color: "#039be5",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#999999" }}>{item.icon}</ListItemIcon>
            <Link href={item.url ? item.url : "/"} noLinkStyle>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: "medium",
                }}
              />
            </Link>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};
