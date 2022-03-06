import { Radio, Theme, Typography, useMediaQuery } from "@mui/material";
import { VFC } from "react";
import { RadioGroup } from "../../../../../../uiParts/RadioGroup";
import { TextField } from "../../../../../../uiParts/TextField";
import { PaymentMethodKeyType, PaymentMethodType } from "../../types";

export const CreditCardForm: VFC = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      <Typography variant="h5">クレジットカード</Typography>
      <TextField
        formDataKey="firstWithdrawalDate"
        rules={{ required: "入力必須パラメータです" }}
        label="初回引き落とし日"
      />
      <RadioGroup
        formDataKey="paymentCycle"
        label="支払いのサイクル"
        id="paid-member-mng-matter-form-payment-cycle"
        choices={(Object.keys(PaymentMethodType) as PaymentMethodKeyType[]).map(
          (key) => ({
            label: PaymentMethodType[key],
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
