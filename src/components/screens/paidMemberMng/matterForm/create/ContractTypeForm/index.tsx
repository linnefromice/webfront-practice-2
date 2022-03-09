import { Stack } from "@mui/material";
import { Button, RadioGroup, TextField } from "components/uiParts";
import { ReactNode, VFC } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { SelectContractKeyType } from "../types";
import { PaymentMethodKeyType, PaymentMethodType } from "./../types";
import { ChiraCeoForm } from "./forms/ChiraCeoForm";
import { JoiningAgencyForm } from "./forms/JoiningAgencyForm";
import { LetterGetForm } from "./forms/LetterGetForm";
import { LetterMeasuresAndChiraCeoForm } from "./forms/LetterMeasuresAndChiraCeoForm";
import { FormData } from "./types";

/** For Debug */
const DebugComponent: VFC<{ methods: UseFormReturn<FormData, any> }> = ({
  methods,
}) => {
  const { setValue, formState } = methods;
  return (
    <div>
      <h3>FOR DEBUG</h3>
      <Button
        variant="contained"
        color="text"
        sx={{ m: 0.25 }}
        onClick={() => {
          setValue("companyName", "Example 会社名");
          setValue("url", "https://example.com");
          setValue("employeeSize", "LessThan6");
          setValue("address", "東京都港区N-N-N");
          setValue("telNumberCompany", "00-0000-0000");
          setValue("managerName", "Example 担当者名");
          setValue("managerMailAddress", "example-manager@example.com");
          setValue("accountingRoleName", "Example 先方経理担当者名");
          setValue("invoiceShippingMailAddress", "example-invoice@example.com");
          setValue("initialCost", "240000");
          setValue("monthlyAmount", "120000");
          setValue("paymentMethod", "CreditCard");
          methods.trigger();
        }}
      >
        {`set dummy data (チラCEO)`}
      </Button>
      <Button
        variant="contained"
        color="text"
        sx={{ m: 0.25 }}
        onClick={() =>
          methods.reset(undefined, {
            keepErrors: true,
            keepDirty: true,
            keepIsSubmitted: true,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: true,
          })
        }
      >
        {`reset data`}
      </Button>
      <Button
        variant="contained"
        color="text"
        sx={{ m: 0.25 }}
        onClick={() => methods.trigger()}
      >
        {`trigger`}
      </Button>
      {formState.isSubmitted && (
        <>
          <p>{`isValid: ${formState.isValid}`}</p>
          <h6>values</h6>
          <p>{JSON.stringify(methods.getValues())}</p>
          <h6>errors</h6>
          <p>{JSON.stringify(formState.errors)}</p>
        </>
      )}
    </div>
  );
};

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
            direction={"column"}
          />
          <TextField
            formDataKey="otherPaymentMethod"
            label="支払方法がその他の場合は入力"
          />
          <Stack direction="row" columnGap={2}>
            <Button
              variant="outlined"
              color="text"
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
          {process.env.NODE_ENV === "development" && (
            <DebugComponent methods={methods} />
          )}
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
