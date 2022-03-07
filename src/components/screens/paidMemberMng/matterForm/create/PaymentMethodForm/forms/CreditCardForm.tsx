import { Typography } from "@mui/material";
import { RadioGroup } from "components/uiParts/RadioGroup";
import { TextField } from "components/uiParts/TextField";
import { DATE_PATTERN, useCommonHooks } from "libs/utils";
import { VFC } from "react";
import { PaymentCycleKeyType, PaymentCycleType } from "../types";

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
        label="初回引き落とし日"
      />
      <RadioGroup
        formDataKey="paymentCycle"
        label="支払いのサイクル"
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
        label="その他(支払いのサイクル)"
      />
      <TextField
        formDataKey="otherSharedMatters"
        label="その他経理チーム向け共有事項"
      />
    </>
  );
};
