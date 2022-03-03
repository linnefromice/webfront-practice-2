import { Typography } from "@mui/material";
import Head from "next/head";
import { VFC } from "react";
import { FirstForm } from "./FirstForm";

export const CreateScreen: VFC = () => {
  return (
    <>
      <Head>
        <title>案件情報フォーム</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        案件情報フォーム
      </Typography>
      <FirstForm />
    </>
  );
};
