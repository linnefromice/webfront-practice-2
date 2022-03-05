import { Button, Radio, Stack } from "@mui/material";
import { ReactNode, VFC } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { RadioGroup } from "../../../../../uiParts/RadioGroup";
import { TextField } from "../../../../../uiParts/TextField";
import { SelectContractKeyType } from "../types";
import { ChiraCeoForm } from "./forms/ChiraCeoForm";
import { JoiningAgencyForm } from "./forms/JoiningAgencyForm";
import { LetterGetForm } from "./forms/LetterGetForm";
import { LetterMeasuresAndChiraCeoForm } from "./forms/LetterMeasuresAndChiraCeoForm";
import { FormData, PaymentMethodKeyType, PaymentMethodType } from "./types";

type ContentsType = {
  onSubmit: (data: FormData) => void;
  onError?: (errors: any) => void;
  contractType: SelectContractKeyType;
};

const Wrapper: VFC<
  {
    methods: UseFormReturn<FormData, any>;
    children: ReactNode;
  } & Omit<ContentsType, "contractType">
> = ({ methods, children, onSubmit, onError }) => {
  const { formState } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          {children}
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

const getContents = (contractType: SelectContractKeyType): ReactNode => {
  if (contractType === "ChiraCeo") return <ChiraCeoForm />;
  if (contractType === "JoiningAgency") return <JoiningAgencyForm />;
  if (contractType === "LetterGet") return <LetterGetForm />;
  if (contractType === "LetterMeasuresAndChiraCeo")
    return <LetterMeasuresAndChiraCeoForm />;
  return <></>;
};

export const Contents: VFC<ContentsType> = ({ contractType, ...rest }) => {
  const methods = useForm<FormData>();

  return (
    <Wrapper methods={methods} {...rest}>
      {getContents(contractType)}
    </Wrapper>
  );
};

export const ContractTypeForm: VFC<{
  onSubmit: (data: FormData) => void;
  contractType: SelectContractKeyType;
}> = (props) => {
  const onError = (errors: any) => {
    console.log(`execute: onError`);
    console.log(errors);
  };

  return <Contents onError={onError} {...props} />;
};
