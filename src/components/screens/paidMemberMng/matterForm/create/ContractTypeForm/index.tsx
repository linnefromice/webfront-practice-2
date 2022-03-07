import { Button, Radio, Stack } from "@mui/material";
import { ReactNode, VFC } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { RadioGroup } from "../../../../../uiParts/RadioGroup";
import { TextField } from "../../../../../uiParts/TextField";
import { SelectContractKeyType } from "../types";
import { PaymentMethodKeyType, PaymentMethodType } from "./../types";
import { ChiraCeoForm } from "./forms/ChiraCeoForm";
import { JoiningAgencyForm } from "./forms/JoiningAgencyForm";
import { LetterGetForm } from "./forms/LetterGetForm";
import { LetterMeasuresAndChiraCeoForm } from "./forms/LetterMeasuresAndChiraCeoForm";
import { FormData } from "./types";

type ContentsType = {
  defaultValues?: FormData;
  onSubmit: (data: FormData) => void;
  onError?: (errors: any) => void;
  backPage: () => void;
  contractType: SelectContractKeyType;
};

const Wrapper: VFC<
  {
    methods: UseFormReturn<FormData, any>;
    children: ReactNode;
  } & Omit<ContentsType, "defaultValues" | "contractType">
> = ({ methods, children, onSubmit, onError, backPage }) => {
  const { formState } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          {children}
          <RadioGroup
            formDataKey="paymentMethod"
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
          <Stack direction="row" columnGap={2}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={backPage}
            >
              前ページに戻る
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!formState.isValid && formState.submitCount > 0}
            >
              次ページに遷移
            </Button>
          </Stack>
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

export const Contents: VFC<ContentsType> = ({
  defaultValues,
  contractType,
  ...rest
}) => {
  const methods = useForm<FormData>({
    defaultValues: defaultValues,
  });

  return (
    <Wrapper methods={methods} {...rest}>
      {getContents(contractType)}
    </Wrapper>
  );
};

export const ContractTypeForm: VFC<Omit<ContentsType, "onError">> = (props) => {
  const onError = (errors: any) => {
    console.log(`execute: onError`);
    console.log(errors);
  };

  return <Contents onError={onError} {...props} />;
};
