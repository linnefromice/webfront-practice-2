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
import { FormDataLabels } from "../create_chiraceo/types";
import { DATAS } from "./mocks";

const Contents: VFC = () => {
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
              {Object.keys(FormDataLabels).map((key) => (
                <TableCell
                  key={key}
                  align={`right`}
                  sx={{ color: "white", bgcolor: "black" }}
                >
                  {`${FormDataLabels[key]}`}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {DATAS.map((v, i) => {
              return (
                <TableRow key={`data.${i}`}>
                  {/** Temporary */}
                  <TableCell>{i + 1}</TableCell>
                  {Object.keys(FormDataLabels).map((key, j) => (
                    <TableCell key={`data.${i}.${j}`} align={`right`}>
                      {v[key]}
                    </TableCell>
                  ))}
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
