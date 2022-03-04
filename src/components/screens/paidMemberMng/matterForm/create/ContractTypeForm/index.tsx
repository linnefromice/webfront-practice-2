import { Button, Radio, Stack } from "@mui/material";
import { VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RadioGroup } from "../../../../../uiParts/RadioGroup";
import { TextField } from "../../../../../uiParts/TextField";
import { FormData, PaymentMethodKeyType, PaymentMethodType } from "./types";

type ContentsType = {
  onSubmit: (data: FormData) => void;
  onError?: (errors: any) => void;
};
export const Contents: VFC<ContentsType> = ({ onSubmit, onError }) => {
  const methods = useForm<FormData>();
  const { formState } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          <RadioGroup
            formDataKey="selectContractType"
            rules={{ required: "入力必須パラメータです" }}
            label="支払方法"
            id="paid-member-mng-matter-form-select-payment-method"
            choices={(
              Object.keys(PaymentMethodType) as PaymentMethodKeyType[]
            ).map((v) => ({ label: PaymentMethodType[v], value: v }))}
            component={<Radio />}
            direction={"column"}
          />
          <TextField
            formDataKey="otherPaymentMethod"
            label="※ 支払方法がその他の場合は入力"
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!formState.isValid && formState.submitCount > 0}
          >
            次ページに遷移
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export const ContractTypeForm: VFC<{
  onSubmit: (data: FormData) => void;
}> = ({ onSubmit }) => {
  const onError = (errors: any) => {
    console.log(`execute: onError`);
    console.log(errors);
  };

  return <Contents onSubmit={onSubmit} onError={onError} />;
};
