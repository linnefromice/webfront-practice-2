import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { VFC } from "react";
import { FormData, FormDataLabels } from "../create/types";
import { useGetFormData } from "./hooks";

const Contents: VFC = () => {
  const { datas } = useGetFormData();

  return (
    <Paper sx={{ width: "300%" }} style={{ overflowX: "scroll" }}>
      <TableContainer sx={{ maxHeight: "80vh" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {/** Temporary */}
              <TableCell
                align={`right`}
                sx={{ color: "white", bgcolor: "black" }}
              >
                ID
              </TableCell>
              {(Object.keys(FormDataLabels) as (keyof FormData)[]).map(
                (key) => (
                  <TableCell
                    key={key}
                    align={`right`}
                    sx={{ color: "white", bgcolor: "black" }}
                  >
                    {`${FormDataLabels[key]}`}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((v, i) => {
              return (
                <TableRow key={`data.${i}`}>
                  {/** Temporary */}
                  <TableCell>{i + 1}</TableCell>
                  {(Object.keys(FormDataLabels) as (keyof FormData)[]).map(
                    (key, j) => (
                      <TableCell key={`data.${i}.${j}`} align={`right`}>
                        {v[key]}
                      </TableCell>
                    )
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export const IndexScreen: VFC = () => {
  return (
    <>
      <Head>
        <title>案件情報一覧(チラCEO)</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        案件情報一覧(チラCEO)
      </Typography>
      <Contents />
    </>
  );
};
