import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead as MuiTableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { VFC } from "react";
import {
  ChiraCeoFormDataLabels as ContractTypeFormDataLabels,
  FormData as ContractTypeFormData,
} from "../create/ContractTypeForm/types";
import {
  FormData as FirstFormData,
  FormDataLabels as FirstFormDataLabels,
} from "../create/FirstForm/types";
import {
  FormData as OnboardingFormData,
  FormDataLabels as OnboardingFormDataLabels,
} from "../create/OnboardingForm/types";
import {
  CreditCardFormDataLabels as PaymentMethodFormDataLabels,
  FormData as PaymentMethodFormData,
} from "../create/PaymentMethodForm/types";
import {
  FormData as SelectContractTypeFormData,
  FormDataLabels as SelectContractTypeFormDataLabels,
} from "../create/SelectContractTypeForm/types";

const TableHead: VFC = () => {
  return (
    <MuiTableHead>
      <TableRow>
        <TableCell align={`right`} sx={{ color: "white", bgcolor: "black" }}>
          ID
        </TableCell>
        {(Object.keys(FirstFormDataLabels) as (keyof FirstFormData)[]).map(
          (key) => (
            <TableCell
              key={key}
              sx={{ color: "white", bgcolor: "black" }}
            >{`${FirstFormDataLabels[key]}`}</TableCell>
          )
        )}
        {(
          Object.keys(
            SelectContractTypeFormDataLabels
          ) as (keyof SelectContractTypeFormData)[]
        ).map((key) => (
          <TableCell
            key={key}
            sx={{ color: "white", bgcolor: "black" }}
          >{`${SelectContractTypeFormDataLabels[key]}`}</TableCell>
        ))}
        {(
          Object.keys(
            ContractTypeFormDataLabels
          ) as (keyof ContractTypeFormData)[]
        ).map((key) => (
          <TableCell
            key={key}
            sx={{ color: "white", bgcolor: "black" }}
          >{`${ContractTypeFormDataLabels[key]}`}</TableCell>
        ))}
        {(
          Object.keys(
            PaymentMethodFormDataLabels
          ) as (keyof PaymentMethodFormData)[]
        ).map((key) => (
          <TableCell
            key={key}
            sx={{ color: "white", bgcolor: "black" }}
          >{`${PaymentMethodFormDataLabels[key]}`}</TableCell>
        ))}
        {(
          Object.keys(OnboardingFormDataLabels) as (keyof OnboardingFormData)[]
        ).map((key) => (
          <TableCell
            key={key}
            sx={{ color: "white", bgcolor: "black" }}
          >{`${OnboardingFormDataLabels[key]}`}</TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

const Contents: VFC = () => {
  return (
    <>
      <Paper>
        <TableContainer>
          <Table stickyHeader>
            <TableHead />
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export const IndexScreen: VFC = () => {
  return (
    <>
      <Head>
        <title>案件情報一覧</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        案件情報一覧
      </Typography>
      <Contents />
    </>
  );
};
