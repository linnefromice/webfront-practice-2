import { Typography } from "@mui/material";
import Head from "next/head";
import { VFC } from "react";

export const IndexScreen: VFC = () => {
  return (
    <>
      <Head>
        <title>案件情報一覧</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        案件情報一覧
      </Typography>
    </>
  );
};
