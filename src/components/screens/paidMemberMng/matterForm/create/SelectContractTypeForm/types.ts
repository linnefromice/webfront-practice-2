import { SelectContractKeyType } from "../types";

export type FormData = {
  selectContractType: SelectContractKeyType;
};

export const FormDataLabels: { [key in keyof FormData]: string } = {
  selectContractType: "新規案件種別",
};
