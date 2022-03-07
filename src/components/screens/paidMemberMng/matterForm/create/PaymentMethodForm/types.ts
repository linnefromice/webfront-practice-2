export const PaymentCycleType = {
  Onetime: "一括支払い",
  Divided: "分割支払い",
  Other: "その他",
} as const;
export type PaymentCycleKeyType = keyof typeof PaymentCycleType;
type CreditCardFormData = {
  firstWithdrawalDate: string; // 初回引き落とし日
  paymentCycle: PaymentCycleKeyType; // 支払いのサイクル
  otherPaymentCycle?: string; // その他(支払いのサイクル)
  otherSharedMatters: string; // その他経理チーム向け共有事項
};
export const CreditCardFormDataLabels: {
  [key in keyof Required<CreditCardFormData>]: string;
} = {
  firstWithdrawalDate: "初回引き落とし日",
  paymentCycle: "支払いのサイクル",
  otherPaymentCycle: "その他(支払いのサイクル)",
  otherSharedMatters: "その他経理チーム向け共有事項",
} as const;

type InvoiceOnetimePaymentFormData = {
  dummyKey: string;
};
type InvoiceDividedPaymentFormData = {
  dummyKey: string;
};

export type FormData =
  | CreditCardFormData
  | InvoiceOnetimePaymentFormData
  | InvoiceDividedPaymentFormData;
