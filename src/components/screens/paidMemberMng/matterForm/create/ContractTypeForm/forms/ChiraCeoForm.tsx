import { Radio, Theme, Typography, useMediaQuery } from "@mui/material";
import { VFC } from "react";
import { RadioGroup } from "../../../../../../uiParts/RadioGroup";
import { TextField } from "../../../../../../uiParts/TextField";
import {
  ContractPlan,
  ContractPlanKeyType,
  EmployeeSize,
  EmployeeSizeKeyType,
} from "../types";

export const ChiraCeoForm: VFC = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

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
      <RadioGroup
        formDataKey="employeeSize"
        rules={{ required: "入力必須パラメータです" }}
        label="従業員規模"
        id="paid-member-mng-matter-form-employee-size"
        choices={(Object.keys(EmployeeSize) as EmployeeSizeKeyType[]).map(
          (key) => ({
            label: EmployeeSize[key],
            value: key,
          })
        )}
        component={<Radio />}
        direction={isMobile ? "column" : "row"}
      />
      <TextField formDataKey="postCode" label="郵便番号" />
      <TextField
        formDataKey="address"
        rules={{ required: "入力必須パラメータです" }}
        label="住所"
      />
      <TextField
        formDataKey="telNumberCompany"
        rules={{
          required: "入力必須パラメータです",
          pattern: {
            value: /(\d{2,3}-\d{4}-\d{4})/,
            message: "ハイフンありの形式で入力してください(NN-NNNN-NNNN)",
          },
        }}
        label="電話番号(会社)"
      />
      <TextField
        formDataKey="telNumberManagerPhone"
        rules={{
          pattern: {
            value: /(\d{2,3}-\d{4}-\d{4})/,
            message: "ハイフンありの形式で入力してください(NN-NNNN-NNNN)",
          },
        }}
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
        rules={{
          required: "入力必須パラメータです",
          pattern: {
            value: /.*@.*/,
            message: "正しい形式で入力してください",
          },
        }}
        label="担当者メールアドレス"
      />
      <TextField
        formDataKey="accountingRoleName"
        rules={{ required: "入力必須パラメータです" }}
        label="先方経理担当者名"
      />
      <TextField
        formDataKey="invoiceShippingMailAddress"
        rules={{
          required: "入力必須パラメータです",
          pattern: {
            value: /.*@.*/,
            message: "正しい形式で入力してください",
          },
        }}
        label="請求書送付先メールアドレス"
      />
      <RadioGroup
        formDataKey="contractPlan"
        label="契約プラン"
        id="paid-member-mng-matter-form-contract-type"
        choices={(Object.keys(ContractPlan) as ContractPlanKeyType[]).map(
          (key) => ({
            label: ContractPlan[key],
            value: key,
          })
        )}
        component={<Radio />}
        direction={isMobile ? "column" : "row"}
      />
      <TextField
        formDataKey="initialCost"
        rules={{
          required: "入力必須パラメータです",
          pattern: {
            value: /\d/,
            message: "数値のみで入力してください",
          },
        }}
        amount
        label="初期費用(税抜)"
      />
      <TextField
        formDataKey="monthlyAmount"
        rules={{
          required: "入力必須パラメータです",
          pattern: {
            value: /\d/,
            message: "数値のみで入力してください",
          },
        }}
        amount
        label="月額(税抜)"
      />
      <TextField formDataKey="firstConsultingDay" label="初回コンサル日" />
      <TextField formDataKey="contractStartDate" label="契約開始日" />
      <TextField formDataKey="contractEndDate" label="契約終了日" />
    </>
  );
};
