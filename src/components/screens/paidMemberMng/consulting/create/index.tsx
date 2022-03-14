import { Typography } from "@mui/material";
import Head from "next/head";
import { VFC } from "react";
import { Confirmation } from "./Confirmation";
import { Form } from "./Form";
import { useForm } from "./hooks";

export const CreateScreen: VFC = () => {
  const { formInfo, closingForm, backPage } = useForm();

  return (
    <>
      <Head>
        <title>チラCEO初回ヒアリングフォーム</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        チラCEO初回ヒアリングフォーム
      </Typography>
      {formInfo.currentPage === "CONFIRMATION" && formInfo.formData ? (
        <Confirmation formData={formInfo.formData} backPage={backPage} />
      ) : (
        <Form onSubmit={closingForm} />
      )}
    </>
  );
};
