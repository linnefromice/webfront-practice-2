import {
  Paper,
  Table,
  TableBody as MuiTableBody,
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
import { MatterFormData, useMatterForm } from "./hooks";

const TableHead: VFC = () => {
  return (
    <MuiTableHead>
      <TableRow>
        <TableCell
          align="center"
          colSpan={1}
          sx={{
            color: "white",
            bgcolor: "black",
            border: 1,
            borderColor: "white",
          }}
        />
        <TableCell
          align="center"
          colSpan={Object.keys(FirstFormDataLabels).length}
          sx={{
            color: "white",
            bgcolor: "black",
            border: 1,
            borderColor: "white",
          }}
        >
          基礎情報(ページ1)
        </TableCell>
        <TableCell
          align="center"
          colSpan={Object.keys(SelectContractTypeFormDataLabels).length}
          sx={{
            color: "white",
            bgcolor: "black",
            border: 1,
            borderColor: "white",
          }}
        >
          案件種別選択(ページ2)
        </TableCell>
        <TableCell
          align="center"
          colSpan={Object.keys(ContractTypeFormDataLabels).length}
          sx={{
            color: "white",
            bgcolor: "black",
            border: 1,
            borderColor: "white",
          }}
        >
          案件種別毎入力項目(ページ3)
        </TableCell>
        <TableCell
          align="center"
          colSpan={Object.keys(PaymentMethodFormDataLabels).length}
          sx={{
            color: "white",
            bgcolor: "black",
            border: 1,
            borderColor: "white",
          }}
        >
          支払方法(ページ4)
        </TableCell>
        <TableCell
          align="center"
          colSpan={Object.keys(OnboardingFormDataLabels).length}
          sx={{
            color: "white",
            bgcolor: "black",
            border: 1,
            borderColor: "white",
          }}
        >
          オンボーディング情報(ページ5)
        </TableCell>
      </TableRow>
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

const TableBody: VFC<{ datas: MatterFormData[] }> = ({ datas }) => {
  return (
    <MuiTableBody>
      {datas.map((key, i) => (
        <TableRow key={`row.${i}`}>
          <TableCell>{i + 1}</TableCell>
          {(Object.keys(FirstFormDataLabels) as (keyof FirstFormData)[]).map(
            (formKey, j) => (
              <TableCell key={`data.${i}.firstFormData.${j}`} align={`right`}>
                {key.firstFormData[formKey]}
              </TableCell>
            )
          )}
          {(
            Object.keys(
              SelectContractTypeFormDataLabels
            ) as (keyof SelectContractTypeFormData)[]
          ).map((formKey, j) => (
            <TableCell
              key={`data.${i}.selectContractTypeFormData.${j}`}
              align={`right`}
            >
              {key.selectContractTypeFormData[formKey]}
            </TableCell>
          ))}
          {(
            Object.keys(
              ContractTypeFormDataLabels
            ) as (keyof ContractTypeFormData)[]
          ).map((formKey, j) => (
            <TableCell
              key={`data.${i}.contractTypeFormData.${j}`}
              align={`right`}
            >
              {key.contractTypeFormData[formKey]}
            </TableCell>
          ))}
          {(
            Object.keys(
              PaymentMethodFormDataLabels
            ) as (keyof PaymentMethodFormData)[]
          ).map((formKey, j) => (
            <TableCell
              key={`data.${i}.paymentMethodFormData.${j}`}
              align={`right`}
            >
              {key.paymentMethodFormData[formKey]}
            </TableCell>
          ))}
          {(
            Object.keys(
              OnboardingFormDataLabels
            ) as (keyof OnboardingFormData)[]
          ).map((formKey, j) => (
            <TableCell
              key={`data.${i}.onBoardingFormData.${j}`}
              align={`right`}
            >
              {key.onBoardingFormData[formKey]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MuiTableBody>
  );
};

const Contents: VFC<{ datas: MatterFormData[] }> = ({ datas }) => {
  return (
    <Paper sx={{ width: "300%" }} style={{ overflowX: "scroll" }}>
      <TableContainer sx={{ maxHeight: "80vh" }}>
        <Table stickyHeader>
          <TableHead />
          <TableBody datas={datas} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export const IndexScreen: VFC = () => {
  const { datas } = useMatterForm();

  return (
    <>
      <Head>
        <title>案件情報一覧</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        案件情報一覧
      </Typography>
      <Contents datas={datas} />
    </>
  );
};
