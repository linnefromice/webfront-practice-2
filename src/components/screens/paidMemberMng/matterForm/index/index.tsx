import {
  Paper,
  SxProps,
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
  ChiraCeoFormDataKeys as ContractTypeFormDataKeys,
  ChiraCeoFormDataLabels as ContractTypeFormDataLabels,
  FormData as ContractTypeFormData,
} from "../create/ContractTypeForm/types";
import {
  FormData as FirstFormData,
  FormDataKeys as FirstFormDataKeys,
  FormDataLabels as FirstFormDataLabels,
} from "../create/FirstForm/types";
import {
  FormData as OnboardingFormData,
  FormDataKeys as OnboardingFormDataKeys,
  FormDataLabels as OnboardingFormDataLabels,
} from "../create/OnboardingForm/types";
import {
  CreditCardFormDataKeys as PaymentMethodFormDataKeys,
  CreditCardFormDataLabels as PaymentMethodFormDataLabels,
  FormData as PaymentMethodFormData,
} from "../create/PaymentMethodForm/types";
import {
  FormData as SelectContractTypeFormData,
  FormDataKeys as SelectContractTypeFormDataKeys,
  FormDataLabels as SelectContractTypeFormDataLabels,
} from "../create/SelectContractTypeForm/types";
import { MatterFormData, useSWRForms } from "./hooks";

type TablePrimaryHeadCellProps = {
  sxProps: SxProps;
  length: number;
  value: string;
};

const TablePrimaryHeadCell: VFC<TablePrimaryHeadCellProps> = ({
  sxProps,
  length,
  value,
}) => {
  return (
    <TableCell align="center" colSpan={length} sx={sxProps}>
      {value}
    </TableCell>
  );
};

const primaryHeadCellPropsList: Omit<TablePrimaryHeadCellProps, "sxProps">[] = [
  {
    value: "",
    length: 1,
  },
  {
    value: "基礎情報(ページ1)",
    length: FirstFormDataKeys.length,
  },
  {
    value: "案件種別選択(ページ2)",
    length: SelectContractTypeFormDataKeys.length,
  },
  {
    value: "案件種別毎入力項目(ページ3)",
    length: ContractTypeFormDataKeys.length,
  },
  {
    value: "支払方法(ページ4)",
    length: PaymentMethodFormDataKeys.length,
  },
  {
    value: "オンボーディング情報(ページ5)",
    length: OnboardingFormDataKeys.length,
  },
];

const TableHead: VFC = () => {
  return (
    <MuiTableHead>
      <TableRow>
        {primaryHeadCellPropsList.map((v, i) => (
          <TablePrimaryHeadCell
            key={`tablePrimaryHeadCell.${i}`}
            {...v}
            sxProps={{
              color: "white",
              bgcolor: "black",
              border: 1,
              borderColor: "white",
            }}
          />
        ))}
      </TableRow>
      <TableRow>
        <TableCell align={`right`} sx={{ color: "white", bgcolor: "black" }}>
          ID
        </TableCell>
        {FirstFormDataKeys.map((key) => (
          <TableCell
            key={key}
            sx={{ color: "white", bgcolor: "black" }}
          >{`${FirstFormDataLabels[key]}`}</TableCell>
        ))}
        {SelectContractTypeFormDataKeys.map((key) => (
          <TableCell
            key={key}
            sx={{ color: "white", bgcolor: "black" }}
          >{`${SelectContractTypeFormDataLabels[key]}`}</TableCell>
        ))}
        {ContractTypeFormDataKeys.map((key) => (
          <TableCell
            key={key}
            sx={{ color: "white", bgcolor: "black" }}
          >{`${ContractTypeFormDataLabels[key]}`}</TableCell>
        ))}
        {PaymentMethodFormDataKeys.map((key) => (
          <TableCell
            key={key}
            sx={{ color: "white", bgcolor: "black" }}
          >{`${PaymentMethodFormDataLabels[key]}`}</TableCell>
        ))}
        {OnboardingFormDataKeys.map((key) => (
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
          {(FirstFormDataKeys as (keyof FirstFormData)[]).map((formKey, j) => (
            <TableCell key={`data.${i}.firstFormData.${j}`} align={`right`}>
              {key.firstFormData[formKey]}
            </TableCell>
          ))}
          {(
            SelectContractTypeFormDataKeys as (keyof SelectContractTypeFormData)[]
          ).map((formKey, j) => (
            <TableCell
              key={`data.${i}.selectContractTypeFormData.${j}`}
              align={`right`}
            >
              {key.selectContractTypeFormData[formKey]}
            </TableCell>
          ))}
          {(ContractTypeFormDataKeys as (keyof ContractTypeFormData)[]).map(
            (formKey, j) => (
              <TableCell
                key={`data.${i}.contractTypeFormData.${j}`}
                align={`right`}
              >
                {key.contractTypeFormData[formKey]}
              </TableCell>
            )
          )}
          {(PaymentMethodFormDataKeys as (keyof PaymentMethodFormData)[]).map(
            (formKey, j) => (
              <TableCell
                key={`data.${i}.paymentMethodFormData.${j}`}
                align={`right`}
              >
                {key.paymentMethodFormData[formKey]}
              </TableCell>
            )
          )}
          {(OnboardingFormDataKeys as (keyof OnboardingFormData)[]).map(
            (formKey, j) => (
              <TableCell
                key={`data.${i}.onBoardingFormData.${j}`}
                align={`right`}
              >
                {key.onBoardingFormData[formKey]}
              </TableCell>
            )
          )}
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
  const { data, error } = useSWRForms();

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const datas = data.forms;

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
