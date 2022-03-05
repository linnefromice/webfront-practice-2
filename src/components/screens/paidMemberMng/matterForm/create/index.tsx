import { Typography } from "@mui/material";
import Head from "next/head";
import { ReactNode, VFC } from "react";
import { ContractTypeForm } from "./ContractTypeForm";
import { FirstForm } from "./FirstForm";
import { Page, useMatterForm } from "./hooks";
import { OnboardingForm } from "./OnboardingForm";
import { PaymentMethodForm } from "./PaymentMethodForm";
import { SelectContractTypeForm } from "./SelectContractTypeForm";
import { SelectContractKeyType } from "./types";

const getPage = ({
  page,
  closingFirstForm,
  closingSelectContractType,
  closingContractType,
  closingPaymentMethod,
  closingOnboarding,
  getContractType,
}: {
  page: Page;
  closingFirstForm: Function;
  closingSelectContractType: Function;
  closingContractType: Function;
  closingPaymentMethod: Function;
  closingOnboarding: Function;
  getContractType: () => SelectContractKeyType | undefined;
}): ReactNode => {
  if (page === "FIRST")
    return (
      <FirstForm
        onSubmit={(data) => {
          closingFirstForm(data);
        }}
      />
    );
  if (page === "SELECT_CONTRACT_TYPE")
    return (
      <SelectContractTypeForm
        onSubmit={(data) => {
          closingSelectContractType(data);
        }}
      />
    );
  if (page === "CONTRACT_TYPE") {
    const contractType = getContractType();
    if (contractType !== undefined) {
      return (
        <ContractTypeForm
          contractType={contractType}
          onSubmit={(data) => {
            closingContractType(data);
          }}
        />
      );
    }
  }
  if (page === "PAYMENT_METHOD")
    return (
      <PaymentMethodForm
        onSubmit={(data) => {
          closingPaymentMethod(data);
        }}
      />
    );
  if (page === "ONBOARDING")
    return (
      <OnboardingForm
        onSubmit={(data) => {
          closingOnboarding(data);
        }}
      />
    );
  return <></>;
};

export const CreateScreen: VFC = () => {
  const { formInfo, ...navigateMethods } = useMatterForm();

  return (
    <>
      <Head>
        <title>案件情報フォーム</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        案件情報フォーム
      </Typography>
      {getPage({
        ...navigateMethods,
        page: formInfo.currentPage,
      })}
    </>
  );
};
