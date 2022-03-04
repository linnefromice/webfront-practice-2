export const PaymentMethodType = {
  CreditCard: "クレジットカード",
  InvoiceOnetimePayment: "一括支払い(請求書発行)",
  AccountTransfer: "口座振替(※初月は請求書を発行します)",
  InvoiceDividedPayment: "分割支払い(請求書発行)",
  Other: "その他",
} as const;

export type PaymentMethodKeyType = keyof typeof PaymentMethodType;

type CommonFormData = {
  paymentMethod: PaymentMethodKeyType;
  otherPaymentMethod?: string;
};

export type ChiraCeoFormData = CommonFormData & {};
export type JoiningAgencyFormData = CommonFormData & {};
export type LetterMeasuresAndChiraCeoFormData = CommonFormData & {};
export type LetterGetFormData = CommonFormData & {};
export type FormData =
  | ChiraCeoFormData
  | JoiningAgencyFormData
  | LetterMeasuresAndChiraCeoFormData
  | LetterGetFormData;
