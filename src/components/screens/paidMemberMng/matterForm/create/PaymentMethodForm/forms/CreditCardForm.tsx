import { Typography } from "@mui/material";
import { RadioGroup, TextField } from "components/uiParts";
import { DATE_PATTERN, useCommonHooks } from "libs/utils";
import { VFC } from "react";
import {
  CreditCardFormDataLabels,
  PaymentCycleKeyType,
  PaymentCycleType,
} from "../types";

export const CreditCardForm: VFC = () => {
  const { isMobile } = useCommonHooks();
  return (
    <>
      <Typography variant="h5">クレジットカード</Typography>
      <TextField
        formDataKey="firstWithdrawalDate"
        rules={{
          required: "入力必須パラメータです",
          pattern: DATE_PATTERN,
        }}
        label={CreditCardFormDataLabels["firstWithdrawalDate"]}
      />
      <RadioGroup
        formDataKey="paymentCycle"
        label={CreditCardFormDataLabels["paymentCycle"]}
        id="paid-member-mng-matter-form-payment-cycle"
        choices={(Object.keys(PaymentCycleType) as PaymentCycleKeyType[]).map(
          (key) => ({
            label: PaymentCycleType[key],
            value: key,
          })
        )}
        direction={isMobile ? "column" : "row"}
      />
      <TextField
        formDataKey="otherPaymentCycle"
        label={CreditCardFormDataLabels["otherPaymentCycle"]}
      />
      <TextField
        formDataKey="otherSharedMatters"
        label={CreditCardFormDataLabels["otherSharedMatters"]}
      />
    </>
  );
};
