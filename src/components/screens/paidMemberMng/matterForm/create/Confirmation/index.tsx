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
import { ChiraCeoFormDataLabels as ContractTypeFormDataLabels } from "../ContractTypeForm/types";
import { FormDataLabels as FirstFormDataLabels } from "../FirstForm/types";
import { FormDataLabels as OnboardingFormDataLabels } from "../OnboardingForm/types";
import { CreditCardFormDataLabels as PaymentMethodFormDataLabels } from "../PaymentMethodForm/types";
import { FormDataLabels as SelectContractTypeFormDataLabels } from "../SelectContractTypeForm/types";
import { MatterFormInfo } from "../types";

const ListItem: VFC<{ label: string; value: string }> = ({ label, value }) => (
  <MuiListItemText
    primary={
      <Typography variant="subtitle1" fontSize={12} fontWeight={"bold"}>
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

const List: VFC<{
  keyPrefix: string;
  label: string;
  formLabels: { [key: string]: string };
  form: { [key: string]: any };
}> = ({ keyPrefix, label, formLabels, form }) => (
  <MuiList subheader={label}>
    {Object.keys(form).map((v) => (
      <ListItem
        key={`${keyPrefix}.${v}`}
        label={formLabels[v]}
        value={form[v] ? form[v]?.toString() : "-"}
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
        label="基礎情報(ページ1)"
        formLabels={FirstFormDataLabels}
        form={props.firstFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        keyPrefix="firstForm"
        label="案件種別選択(ページ2)"
        formLabels={SelectContractTypeFormDataLabels}
        form={props.selectContractTypeFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        keyPrefix="selectContractTypeForm"
        label="案件種別毎入力項目(ページ3)"
        formLabels={ContractTypeFormDataLabels}
        form={props.contractTypeFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        keyPrefix="paymentMethodForm"
        label="支払方法(ページ4)"
        formLabels={PaymentMethodFormDataLabels}
        form={props.paymentMethodFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <List
        keyPrefix="onboardingForm"
        label="オンボーディング情報(ページ5)"
        formLabels={OnboardingFormDataLabels}
        form={props.onBoardingFormData as { [key: string]: any }}
      />
      <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
      <Stack direction="row" columnGap={2}>
        <Button variant="outlined" color="text" fullWidth>
          前ページに戻る
        </Button>
        <Button variant="contained" fullWidth>
          フォーム送信
        </Button>
      </Stack>
    </>
  );
};

export const ConfirmationView: VFC<Props> = (props) => {
  return <Contents {...props} />;
};
