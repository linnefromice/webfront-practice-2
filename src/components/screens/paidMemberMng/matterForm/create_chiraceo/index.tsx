import { Typography } from "@mui/material";
import Head from "next/head";
import { VFC } from "react";
import { Form } from "./Form";

export const CreateChiraceoScreen: VFC = () => {
  return (
    <>
      <Head>
        <title>チラCEO初回ヒアリングフォーム</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        チラCEO初回ヒアリングフォーム
      </Typography>
      <Form />
    </>
  );
};
