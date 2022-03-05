import { Typography } from "@mui/material";
import { VFC } from "react";
import { TextField } from "../../../../../../uiParts/TextField";

export const ChiraCeoForm: VFC = () => {
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        {`チラCEO 新規`}
      </Typography>
      <TextField
        formDataKey="companyName"
        rules={{ required: "入力必須パラメータです" }}
        label="企業名"
      />
      <TextField
        formDataKey="url"
        rules={{ required: "入力必須パラメータです" }}
        label="URL"
      />
      <TextField
        formDataKey="employeeSize"
        rules={{ required: "入力必須パラメータです" }}
        label="従業員規模"
      />
      <TextField formDataKey="postCode" label="郵便番号" />
      <TextField
        formDataKey="address"
        rules={{ required: "入力必須パラメータです" }}
        label="住所"
      />
      <TextField
        formDataKey="telNumberCompany"
        rules={{ required: "入力必須パラメータです" }}
        label="電話番号(会社)"
      />
      <TextField
        formDataKey="telNumberManagerPhone"
        label="電話番号(担当者携帯)"
      />
      <TextField
        formDataKey="managerName"
        rules={{ required: "入力必須パラメータです" }}
        label="担当者名"
      />
      <TextField formDataKey="managerRole" label="担当者役職" />
      <TextField
        formDataKey="managerMailAddress"
        rules={{ required: "入力必須パラメータです" }}
        label="担当者メールアドレス"
      />
      <TextField
        formDataKey="accountingRoleName"
        rules={{ required: "入力必須パラメータです" }}
        label="先方経理担当者名"
      />
      <TextField
        formDataKey="invoiceShippingMailAddress"
        rules={{ required: "入力必須パラメータです" }}
        label="請求書送付先メールアドレス"
      />
      <TextField formDataKey="contractPlan" label="契約プラン" />
      <TextField
        formDataKey="initialCost"
        rules={{ required: "入力必須パラメータです" }}
        label="初期費用(税抜)"
      />
      <TextField
        formDataKey="monthlyAmount"
        rules={{ required: "入力必須パラメータです" }}
        label="月額(税抜)"
      />
      <TextField formDataKey="firstConsultingDay" label="初回コンサル日" />
      <TextField formDataKey="contractStartDate" label="契約開始日" />
      <TextField formDataKey="contractEndDate" label="契約終了日" />
    </>
  );
};
