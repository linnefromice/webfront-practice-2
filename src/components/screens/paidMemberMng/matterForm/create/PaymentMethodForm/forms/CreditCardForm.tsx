import { Radio, Typography } from "@mui/material";
import { VFC } from "react";
import { useCommonHooks } from "../../../../../../../libs/utils";
import { RadioGroup } from "../../../../../../uiParts/RadioGroup";
import { TextField } from "../../../../../../uiParts/TextField";
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
          pattern: {
            value: /\d{8}/,
            message: "yyyyMMdd の形式で日付を入力してください",
          },
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
        component={<Radio />}
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
