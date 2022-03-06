import { FormData as ContractTypeFormData } from "./ContractTypeForm/types";
import { FormData as FirstFormData } from "./FirstForm/types";
import { FormData as OnBoardingFormData } from "./OnboardingForm/types";
import { FormData as PaymentMethodFormData } from "./PaymentMethodForm/types";
import { FormData as SelectContractTypeFormData } from "./SelectContractTypeForm/types";

export type Page =
  | "FIRST"
  | "SELECT_CONTRACT_TYPE"
  | "CONTRACT_TYPE"
  | "PAYMENT_METHOD"
  | "ONBOARDING";

export type MatterFormInfo = {
  currentPage: Page;
  firstFormData?: FirstFormData;
  selectContractTypeFormData?: SelectContractTypeFormData;
  contractTypeFormData?: ContractTypeFormData;
  paymentMethodFormData?: PaymentMethodFormData;
  onBoardingFormData?: OnBoardingFormData;
};

export type UseMatterFormReturn = {
  formInfo: MatterFormInfo;
  closingFirstForm: (v: FirstFormData) => void;
  closingSelectContractType: (v: SelectContractTypeFormData) => void;
  closingContractType: (v: ContractTypeFormData) => void;
  closingPaymentMethod: (v: PaymentMethodFormData) => void;
  closingOnboarding: (v: OnBoardingFormData) => void;
  backPage: () => void;
  getContractType: () => SelectContractKeyType | undefined;
  getPaymentMethod: () => PaymentMethodKeyType | undefined;
};

export const SelectContractType = {
  ChiraCeo: "チラCEO",
  JoiningAgency: "代理店加盟",
  LetterMeasuresAndChiraCeo: "手紙施策 x チラCEO",
  LetterGet: "レターゲット",
} as const;

export type SelectContractKeyType = keyof typeof SelectContractType;

export const PaymentMethodType = {
  CreditCard: "クレジットカード",
  InvoiceOnetimePayment: "一括支払い(請求書発行)",
  AccountTransfer: "口座振替(※初月は請求書を発行します)",
  InvoiceDividedPayment: "分割支払い(請求書発行)",
  Other: "その他",
} as const;

export type PaymentMethodKeyType = keyof typeof PaymentMethodType;
