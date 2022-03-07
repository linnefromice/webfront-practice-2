import { Typography } from "@mui/material";
import Head from "next/head";
import { ReactNode, VFC } from "react";
import { ContractTypeForm } from "./ContractTypeForm";
import { FirstForm } from "./FirstForm";
import { useMatterForm } from "./hooks";
import { OnboardingForm } from "./OnboardingForm";
import { PaymentMethodForm } from "./PaymentMethodForm";
import { SelectContractTypeForm } from "./SelectContractTypeForm";
import { UseMatterFormReturn } from "./types";

const getPage = (props: UseMatterFormReturn): ReactNode => {
  const { formInfo, backPage } = props;

  if (formInfo.currentPage === "FIRST")
    return (
      <FirstForm
        onSubmit={(data) => {
          props.closingFirstForm(data);
        }}
        defaultValues={formInfo.firstFormData}
      />
    );
  if (formInfo.currentPage === "SELECT_CONTRACT_TYPE")
    return (
      <SelectContractTypeForm
        onSubmit={(data) => {
          props.closingSelectContractType(data);
        }}
        backPage={backPage}
        defaultValues={formInfo.selectContractTypeFormData}
      />
    );
  if (formInfo.currentPage === "CONTRACT_TYPE") {
    const contractType = props.getContractType();
    if (contractType !== undefined) {
      return (
        <ContractTypeForm
          contractType={contractType}
          onSubmit={(data) => {
            props.closingContractType(data);
          }}
          backPage={backPage}
          defaultValues={formInfo.contractTypeFormData}
        />
      );
    }
  }
  if (formInfo.currentPage === "PAYMENT_METHOD") {
    const paymentMethod = props.getPaymentMethod();
    if (paymentMethod !== undefined) {
      return (
        <PaymentMethodForm
          paymentMethod={paymentMethod}
          onSubmit={(data) => {
            props.closingPaymentMethod(data);
          }}
          backPage={backPage}
          defaultValues={formInfo.paymentMethodFormData}
        />
      );
    }
  }
  if (formInfo.currentPage === "ONBOARDING")
    return (
      <OnboardingForm
        onSubmit={(data) => {
          props.closingOnboarding(data);
        }}
        backPage={backPage}
        defaultValues={formInfo.onBoardingFormData}
      />
    );
  return <></>;
};

export const CreateScreen: VFC = () => {
  const methods = useMatterForm();
  const { formInfo } = methods;

  return (
    <>
      <Head>
        <title>案件情報フォーム</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        案件情報フォーム
      </Typography>
      {getPage(methods)}
      {/** Debug code */}
      {formInfo.currentPage === "CONFIRMATION" && (
        <>
          <h6>firstFormData</h6>
          <div>{JSON.stringify(formInfo.firstFormData)}</div>
          <h6>selectContractTypeFormData</h6>
          <div>{JSON.stringify(formInfo.selectContractTypeFormData)}</div>
          <h6>contractTypeFormData</h6>
          <div>{JSON.stringify(formInfo.contractTypeFormData)}</div>
          <h6>paymentMethodFormData</h6>
          <div>{JSON.stringify(formInfo.paymentMethodFormData)}</div>
          <h6>onBoardingFormData</h6>
          <div>{JSON.stringify(formInfo.onBoardingFormData)}</div>
        </>
      )}
    </>
  );
};
