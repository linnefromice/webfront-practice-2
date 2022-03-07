import { Typography } from "@mui/material";
import { RadioGroup, TextField } from "components/uiParts";
import {
  MAIL_ADDRESS_PATTERN,
  ONLY_NUMBER_PATTERN,
  TEL_NUMBER_PATTERN,
  useCommonHooks,
} from "libs/utils";
import { VFC } from "react";
import {
  ChiraCeoFormDataLabels,
  ContractPlan,
  ContractPlanKeyType,
  EmployeeSize,
  EmployeeSizeKeyType,
} from "../types";

export const ChiraCeoForm: VFC = () => {
  const { isMobile } = useCommonHooks();

  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        {`チラCEO 新規`}
      </Typography>
      <TextField
        formDataKey="companyName"
        rules={{ required: "入力必須パラメータです" }}
        label={ChiraCeoFormDataLabels["companyName"]}
      />
      <TextField
        formDataKey="url"
        rules={{ required: "入力必須パラメータです" }}
        label={ChiraCeoFormDataLabels["url"]}
      />
      <RadioGroup
        formDataKey="employeeSize"
        rules={{ required: "入力必須パラメータです" }}
        label={ChiraCeoFormDataLabels["employeeSize"]}
        id="paid-member-mng-matter-form-employee-size"
        choices={(Object.keys(EmployeeSize) as EmployeeSizeKeyType[]).map(
          (key) => ({
            label: EmployeeSize[key],
            value: key,
          })
        )}
        direction={isMobile ? "column" : "row"}
      />
      <TextField
        formDataKey="postCode"
        label={ChiraCeoFormDataLabels["postCode"]}
      />
      <TextField
        formDataKey="address"
        rules={{ required: "入力必須パラメータです" }}
        label={ChiraCeoFormDataLabels["address"]}
      />
      <TextField
        formDataKey="telNumberCompany"
        rules={{
          required: "入力必須パラメータです",
          pattern: TEL_NUMBER_PATTERN,
        }}
        label={ChiraCeoFormDataLabels["telNumberCompany"]}
      />
      <TextField
        formDataKey="telNumberManagerPhone"
        rules={{
          pattern: TEL_NUMBER_PATTERN,
        }}
        label={ChiraCeoFormDataLabels["telNumberManagerPhone"]}
      />
      <TextField
        formDataKey="managerName"
        rules={{ required: "入力必須パラメータです" }}
        label={ChiraCeoFormDataLabels["managerName"]}
      />
      <TextField
        formDataKey="managerRole"
        label={ChiraCeoFormDataLabels["managerRole"]}
      />
      <TextField
        formDataKey="managerMailAddress"
        rules={{
          required: "入力必須パラメータです",
          pattern: {
            value: /.*@.*/,
            message: "正しい形式で入力してください",
          },
        }}
        label={ChiraCeoFormDataLabels["managerMailAddress"]}
      />
      <TextField
        formDataKey="accountingRoleName"
        rules={{ required: "入力必須パラメータです" }}
        label={ChiraCeoFormDataLabels["accountingRoleName"]}
      />
      <TextField
        formDataKey="invoiceShippingMailAddress"
        rules={{
          required: "入力必須パラメータです",
          pattern: MAIL_ADDRESS_PATTERN,
        }}
        label={ChiraCeoFormDataLabels["invoiceShippingMailAddress"]}
      />
      <RadioGroup
        formDataKey="contractPlan"
        label={ChiraCeoFormDataLabels["contractPlan"]}
        id="paid-member-mng-matter-form-contract-type"
        choices={(Object.keys(ContractPlan) as ContractPlanKeyType[]).map(
          (key) => ({
            label: ContractPlan[key],
            value: key,
          })
        )}
        direction={isMobile ? "column" : "row"}
      />
      <TextField
        formDataKey="initialCost"
        rules={{
          required: "入力必須パラメータです",
          pattern: ONLY_NUMBER_PATTERN,
        }}
        amount
        label={ChiraCeoFormDataLabels["initialCost"]}
      />
      <TextField
        formDataKey="monthlyAmount"
        rules={{
          required: "入力必須パラメータです",
          pattern: ONLY_NUMBER_PATTERN,
        }}
        amount
        label={ChiraCeoFormDataLabels["monthlyAmount"]}
      />
      <TextField
        formDataKey="firstConsultingDay"
        label={ChiraCeoFormDataLabels["firstConsultingDay"]}
      />
      <TextField
        formDataKey="contractStartDate"
        label={ChiraCeoFormDataLabels["contractStartDate"]}
      />
      <TextField
        formDataKey="contractEndDate"
        label={ChiraCeoFormDataLabels["contractEndDate"]}
      />
    </>
  );
};
