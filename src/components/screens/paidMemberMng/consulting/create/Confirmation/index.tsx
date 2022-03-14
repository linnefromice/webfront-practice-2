import {
  Divider,
  List as MuiList,
  ListItemText as MuiListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Button } from "components/uiParts";
import { VFC } from "react";
import { FormData, FormDataLabels } from "../types";

const ListItem: VFC<{ label: string; value: string }> = ({ label, value }) => (
  <MuiListItemText
    primary={
      <Typography variant="subtitle1" fontSize={12}>
        {label}
      </Typography>
    }
    secondary={
      <Paper variant="outlined" sx={{ p: 1 }}>
        <Typography variant="body1">{value}</Typography>
      </Paper>
    }
  />
);

type ListProps = {
  formLabels: { [key: string]: string };
  form: { [key: string]: any };
};
const List: VFC<ListProps> = ({ formLabels, form }) => (
  <MuiList>
    {Object.keys(form).map((v) => (
      <ListItem
        key={v}
        label={formLabels[v]}
        value={form[v] ? form[v]?.toString() : "-"}
      />
    ))}
  </MuiList>
);

type Props = {
  formData: FormData;
  backPage: () => void;
};
const Contents: VFC<Props> = (props) => {
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        入力内容確認
      </Typography>
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        formLabels={FormDataLabels}
        form={props.formData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <Stack direction="row" columnGap={2}>
        <Button
          variant="outlined"
          color="text"
          fullWidth
          onClick={props.backPage}
        >
          前ページに戻る
        </Button>
        <Button variant="contained" fullWidth>
          フォーム送信
        </Button>
      </Stack>
    </>
  );
};

export const Confirmation: VFC<Props> = (props) => {
  return <Contents {...props} />;
};
