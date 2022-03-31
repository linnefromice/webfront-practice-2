import { SelectContractKeyType } from "../types";

export const FormDataKeys = ["selectContractType"];
type FormDataKey = typeof FormDataKeys[number];

export type FormData = {
  selectContractType: SelectContractKeyType;
};

export const FormDataLabels: { [key in FormDataKey]: string } = {
  selectContractType: "新規案件種別",
} as const;
