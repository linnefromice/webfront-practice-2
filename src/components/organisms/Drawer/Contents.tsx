import EditIcon from "@mui/icons-material/Edit";
import ListAltIcon from "@mui/icons-material/ListAlt";
import TableViewIcon from "@mui/icons-material/TableView";
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
import { Link } from "components/uiParts";
import { Colors } from "constants/theme";
import { ReactNode, VFC } from "react";

type ListItemType = NestedListItemType & {
  nestings?: NestedListItemType[];
};

type NestedListItemType = {
  icon: ReactNode;
  url?: string;
  label: ReactNode;
};

const _matterFormNestings: NestedListItemType[] = [
  {
    icon: <TableViewIcon />,
    url: "/paidMemberMng/matterForm",
    label: "一覧",
  },
  {
    icon: <EditIcon />,
    url: "/paidMemberMng/matterForm/create",
    label: "追加",
  },
];

const _consultingNetings: NestedListItemType[] = [
  {
    icon: <TableViewIcon />,
    url: "/paidMemberMng/consulting",
    label: "一覧",
  },
  {
    icon: <EditIcon />,
    url: "/paidMemberMng/consulting/create",
    label: "追加",
  },
];

const items: ListItemType[] = [
  {
    icon: <ListAltIcon />,
    label: "案件情報",
    nestings: _matterFormNestings,
  },
  {
    icon: <ListAltIcon />,
    label: "コンサルティング",
    nestings: _consultingNetings,
  },
  { icon: <ListAltIcon />, label: "マッチング" },
  { icon: <ListAltIcon />, label: "マッチング成果報告" },
];

const Header: VFC = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{ color: Colors.white }}
      >
        Onlystory
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        sx={{ color: Colors.white }}
      >
        inhouse app
      </Typography>
    </Stack>
  );
};

const NestedItem: VFC<{ item: NestedListItemType }> = ({ item }) => {
  const _primaryTypographyProps = {
    fontSize: 14,
    fontWeight: "medium",
  };

  return (
    <List component="div" disablePadding>
      <ListItemButton
        sx={{
          paddingLeft: 4,
          maxHeight: 48,
          color: Colors.white,
          "&:hover": {
            background: "#0c2d48",
          },
        }}
        disabled={item.url == null}
      >
        <ListItemIcon sx={{ color: Colors.gray }}>{item.icon}</ListItemIcon>
        {item.url ? (
          <Link href={item.url} noLinkStyle>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={_primaryTypographyProps}
            />
          </Link>
        ) : (
          <ListItemText
            primary={item.label}
            primaryTypographyProps={_primaryTypographyProps}
          />
        )}
      </ListItemButton>
    </List>
  );
};

const Item: VFC<{ item: ListItemType }> = ({ item }) => {
  const _listItemButtonSx = {
    maxHeight: 48,
    color: Colors.white,
  };

  const _primaryTypographyProps = {
    fontSize: 14,
    fontWeight: "medium",
  };

  return (
    <>
      <ListItemButton
        sx={
          item.url
            ? {
                ..._listItemButtonSx,
                "&:hover": {
                  background: "#0c2d48",
                },
              }
            : _listItemButtonSx
        }
        disabled={item.url == null && item.nestings == null}
        disableRipple={item.url == null}
      >
        <ListItemIcon sx={{ color: Colors.gray }}>{item.icon}</ListItemIcon>
        {item.url ? (
          <Link href={item.url ? item.url : "/"} noLinkStyle>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={_primaryTypographyProps}
            />
          </Link>
        ) : (
          <ListItemText
            primary={item.label}
            primaryTypographyProps={_primaryTypographyProps}
          />
        )}
      </ListItemButton>
      {item.nestings &&
        item.nestings.map((nestedItem, j) => (
          <NestedItem key={`drawer.item.nestedItems.${j}`} item={nestedItem} />
        ))}
    </>
  );
};

export const DrawerContents: VFC = () => {
  return (
    <>
      <Header />
      <Divider sx={{ backgroundColor: Colors.white }} />
      <List
        subheader={
          <ListSubheader
            sx={{
              background: "#031525", // because not reflected BaseDrawer styling
              color: Colors.white,
            }}
          >
            有料会員管理
          </ListSubheader>
        }
      >
        {items.map((item, index) => (
          <Item key={`drawer.item.${index}`} item={item} />
        ))}
      </List>
    </>
  );
};
