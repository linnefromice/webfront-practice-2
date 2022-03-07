import {
  Button,
  Divider,
  List as MuiList,
  ListItemText as MuiListItemText,
  Typography,
} from "@mui/material";
import { VFC } from "react";
import { MatterFormInfo } from "../types";

const ListItem: VFC<{ label: string; value: string }> = ({ label, value }) => (
  <MuiListItemText
    primary={
      <Typography variant="subtitle1" fontSize={12} fontWeight={"bold"}>
        {label}
      </Typography>
    }
    secondary={<Typography variant="body1">{value}</Typography>}
  />
);

const List: VFC<{
  keyPrefix: string;
  label: string;
  value: { [key: string]: any };
}> = ({ keyPrefix, label, value }) => (
  <MuiList subheader={label}>
    {Object.keys(value).map((v) => (
      <ListItem
        key={`${keyPrefix}.${v}`}
        label={v}
        value={value[v] ? value[v]?.toString() : "-"}
      />
    ))}
  </MuiList>
);

type Props = Omit<MatterFormInfo, "currentPage">;
const Contents: VFC<Props> = (props) => {
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        入力内容確認
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        keyPrefix="firstForm"
        label="ページ1"
        value={props.firstFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        keyPrefix="firstForm"
        label="案件種別選択(ページ2)"
        value={props.selectContractTypeFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        keyPrefix="selectContractTypeForm"
        label="案件種別毎入力項目(ページ3)"
        value={props.contractTypeFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        keyPrefix="paymentMethodForm"
        label="支払方法(ページ4)"
        value={props.paymentMethodFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        keyPrefix="onboardingForm"
        label="オンボーディング情報(ページ5)"
        value={props.onBoardingFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <Button variant="contained">フォーム送信</Button>
    </>
  );
};

export const ConfirmationView: VFC<Props> = (props) => {
  return <Contents {...props} />;
};
