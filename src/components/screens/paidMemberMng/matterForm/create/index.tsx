import { Button, Typography } from "@mui/material";
import Head from "next/head";
import { ReactNode, VFC } from "react";
import { ContractTypeForm } from "./ContractTypeForm";
import { FirstForm } from "./FirstForm";
import { Page, useMatterForm } from "./hooks";
import { SelectContractTypeForm } from "./SelectContractTypeForm";

const getPage = ({
  page,
  closingFirstForm,
  closingSelectContractType,
  closingContractType,
  navigateOnboarding,
}: {
  page: Page;
  closingFirstForm: Function;
  closingSelectContractType: Function;
  closingContractType: Function;
  navigateOnboarding: () => void;
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
  if (page === "CONTRACT_TYPE")
    return (
      <ContractTypeForm
        onSubmit={(data) => {
          closingContractType(data);
        }}
      />
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
