export const SelectContractType = {
  ChiraCeo: "チラCEO",
  JoiningAnAgency: "代理店加盟",
  LetterMeasuresAndChiraCeo: "手紙施策 x チラCEO",
  LetterGet: "レターゲット",
} as const;

export type SelectContractKeyType = keyof typeof SelectContractType;

export type FormData = {
  selectContractType: SelectContractKeyType;
};
