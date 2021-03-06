import { Stack, Typography } from "@mui/material";
import { Button } from "components/uiParts";
import { ReactNode, VFC } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { PaymentMethodKeyType } from "../types";
import { CreditCardForm } from "./forms/CreditCardForm";
import { InvoiceDividedPaymentForm } from "./forms/InvoiceDividedPaymentForm";
import { InvoiceOnetimePaymentForm } from "./forms/InvoiceOnetimePaymentForm";
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
          setValue("firstWithdrawalDate", "20000101");
          methods.trigger();
        }}
      >
        {`set dummy data`}
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

const getContents = (paymentMethod: PaymentMethodKeyType) => {
  if (paymentMethod === "CreditCard") return <CreditCardForm />;
  if (paymentMethod === "InvoiceOnetimePayment")
    return <InvoiceOnetimePaymentForm />;
  if (paymentMethod === "InvoiceDividedPayment")
    return <InvoiceDividedPaymentForm />;
  if (paymentMethod === "AccountTransfer")
    return (
      <>
        <Typography variant="h5">????????????</Typography>
        <Typography>??????????????????????????????????????????</Typography>
      </>
    );
  if (paymentMethod === "Other")
    return (
      <>
        <Typography variant="h5">?????????</Typography>
        <Typography>??????????????????????????????????????????</Typography>
      </>
    );
  return <></>;
};

type ContentsType = {
  defaultValues?: FormData;
  onSubmit: (date: FormData) => void;
  onError?: (errors: any) => void;
  backPage: () => void;
  paymentMethod: PaymentMethodKeyType;
};
const Wrapper: VFC<
  {
    methods: UseFormReturn<FormData, any>;
    children: ReactNode;
  } & Omit<ContentsType, "defaultValues" | "paymentMethod">
> = ({ methods, children, onSubmit, onError, backPage }) => {
  const { formState } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          {children}
          <Stack direction="row" columnGap={2}>
            <Button
              variant="outlined"
              color="text"
              fullWidth
              onClick={backPage}
            >
              ?????????????????????
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!formState.isValid && formState.submitCount > 0}
            >
              ?????????????????????
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

export const Contents: VFC<ContentsType> = ({
  defaultValues,
  paymentMethod,
  ...rest
}) => {
  const methods = useForm<FormData>({
    defaultValues: defaultValues,
  });

  return (
    <Wrapper methods={methods} {...rest}>
      {getContents(paymentMethod)}
    </Wrapper>
  );
};

export const PaymentMethodForm: VFC<Omit<ContentsType, "onError">> = (
  props
) => {
  // TODO: consider back page pattern
  // useEffect(() => {
  //   if (paymentMethod === "AccountTransfer" || paymentMethod === "Other")
  //     onSubmit({});
  // }, [paymentMethod, onSubmit]);

  const onError = (errors: any) => {
    console.log(`execute: onError`);
    console.log(errors);
  };

  return <Contents onError={onError} {...props} />;
};
