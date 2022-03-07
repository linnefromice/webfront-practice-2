import { SelectContractKeyType } from "../types";

export type FormData = {
  selectContractType: SelectContractKeyType;
};

export const FormDataLabels: { [key in keyof Required<FormData>]: string } = {
  selectContractType: "新規案件種別",
} as const;
