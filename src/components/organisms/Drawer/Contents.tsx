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
import { ReactNode, VFC } from "react";

const items: { icon: ReactNode; label: string }[] = [
  { icon: <ListAltIcon />, label: "案件情報" },
  { icon: <ListAltIcon />, label: "コンサルティング" },
  { icon: <ListAltIcon />, label: "マッチング" },
  { icon: <ListAltIcon />, label: "マッチング成果報告" },
];

export const DrawerContents: VFC = () => {
  return (
    <>
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h5" gutterBottom component="div">
          Onlystory
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          inhouse app
        </Typography>
      </Stack>
      <Divider />
      <List subheader={<ListSubheader>有料会員管理</ListSubheader>}>
        {items.map((item, index) => (
          <ListItemButton key={`drawer.item.${index}`} sx={{ maxHeight: 48 }}>
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
            />
          </ListItemButton>
        ))}
      </List>
    </>
  );
};
