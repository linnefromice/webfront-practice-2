import { Button, Typography } from "@mui/material";
import Head from "next/head";
import { ReactNode, VFC } from "react";
import { FirstForm } from "./FirstForm";
import { Page, useForm } from "./hooks";

const getPage = ({
  page,
  navigateSelectContractType,
  navigateContractType,
  navigatePaymentMethod,
  navigateOnboarding,
}: {
  page: Page;
  navigateSelectContractType: () => void;
  navigateContractType: () => void;
  navigatePaymentMethod: () => void;
  navigateOnboarding: () => void;
}): ReactNode => {
  if (page === "FIRST")
    return (
      <FirstForm
        onSubmit={(data) => {
          console.log(data);
          navigateSelectContractType();
        }}
      />
    );
  if (page === "SELECT_CONTRACT_TYPE")
    return (
      <>
        <Typography variant="h1">SELECT_CONTRACT_TYPE</Typography>
        <Button onClick={navigateContractType}>SUBMIT</Button>
      </>
    );
  if (page === "CONTRACT_TYPE")
    return (
      <>
        <Typography variant="h1">CONTRACT_TYPE</Typography>
        <Button onClick={navigatePaymentMethod}>SUBMIT</Button>
      </>
    );
  if (page === "PAYMENT_METHOD")
    return (
      <>
        <Typography variant="h1">PAYMENT_METHOD</Typography>
        <Button onClick={navigateOnboarding}>SUBMIT</Button>
      </>
    );
  if (page === "ONBOARDING")
    return (
      <>
        <Typography variant="h1">ONBOARDING</Typography>
      </>
    );
  return <></>;
};

export const CreateScreen: VFC = () => {
  const {
    page,
    navigateSelectContractType,
    navigateContractType,
    navigatePaymentMethod,
    navigateOnboarding,
  } = useForm();

  return (
    <>
      <Head>
        <title>案件情報フォーム</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        案件情報フォーム
      </Typography>
      {getPage({
        page,
        navigateSelectContractType,
        navigateContractType,
        navigatePaymentMethod,
        navigateOnboarding,
      })}
    </>
  );
};
