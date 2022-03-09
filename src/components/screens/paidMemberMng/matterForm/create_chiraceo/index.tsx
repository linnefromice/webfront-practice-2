import { Typography } from "@mui/material";
import Head from "next/head";
import { VFC } from "react";

export const CreateChiraCeoScreen: VFC = () => {
  return (
    <>
      <Head>
        <title>チラCEO初回ヒアリングフォーム</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        チラCEO初回ヒアリングフォーム
      </Typography>
    </>
  );
};
