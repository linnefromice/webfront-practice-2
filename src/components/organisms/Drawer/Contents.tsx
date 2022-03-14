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
import { ReactNode, VFC } from "react";

type ListItemType = NestedListItemType & {
  nestings?: NestedListItemType[];
};

type NestedListItemType = {
  icon: ReactNode;
  url?: string;
  label: ReactNode;
};

const items: ListItemType[] = [
  {
    icon: <ListAltIcon />,
    label: "案件情報",
    nestings: [
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
      {
        icon: <TableViewIcon />,
        url: "/paidMemberMng/matterForm/index_chiraceo",
        label: (
          <Typography fontSize={12}>
            一覧
            <br />
            (チラCEO初回ヒアリング)
          </Typography>
        ),
      },
      {
        icon: <EditIcon />,
        url: "/paidMemberMng/matterForm/create_chiraceo",
        label: (
          <Typography fontSize={12}>
            追加
            <br />
            (チラCEO初回ヒアリング)
          </Typography>
        ),
      },
    ],
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
          <>
            <ListItemButton
              key={`drawer.item.${index}`}
              sx={
                item.url
                  ? {
                      maxHeight: 48,
                      color: "#FFFFFF",
                      "&:hover": {
                        background: "#0c2d48",
                      },
                    }
                  : {
                      maxHeight: 48,
                      color: "#FFFFFF",
                    }
              }
              disabled={item.url == null && item.nestings == null}
              disableRipple={item.url == null}
            >
              <ListItemIcon sx={{ color: "gray" }}>{item.icon}</ListItemIcon>
              {item.url ? (
                <Link href={item.url ? item.url : "/"} noLinkStyle>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                </Link>
              ) : (
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: "medium",
                  }}
                />
              )}
            </ListItemButton>
            {item.nestings &&
              item.nestings.map((nestedItem, j) => (
                <List
                  key={`drawer.item.${index}.nestedItem.${j}`}
                  component="div"
                  disablePadding
                >
                  <ListItemButton
                    sx={{
                      paddingLeft: 4,
                      maxHeight: 48,
                      color: "#FFFFFF",
                      "&:hover": {
                        background: "#0c2d48",
                      },
                    }}
                    disabled={nestedItem.url == null}
                  >
                    <ListItemIcon sx={{ color: "gray" }}>
                      {nestedItem.icon}
                    </ListItemIcon>
                    {nestedItem.url ? (
                      <Link href={nestedItem.url} noLinkStyle>
                        <ListItemText
                          primary={nestedItem.label}
                          primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: "medium",
                          }}
                        />
                      </Link>
                    ) : (
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: "medium",
                        }}
                      />
                    )}
                  </ListItemButton>
                </List>
              ))}
          </>
        ))}
      </List>
    </>
  );
};
