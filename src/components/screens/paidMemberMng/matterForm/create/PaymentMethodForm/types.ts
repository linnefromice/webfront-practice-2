export const PaymentCycleType = {
  Onetime: "一括支払い",
  Divided: "分割支払い",
  Other: "その他",
};
export type PaymentCycleKeyType = keyof typeof PaymentCycleType;
type CreditCardFormData = {
  firstWithdrawalDate: string; // 初回引き落とし日
  paymentCycle: PaymentCycleKeyType; // 支払いのサイクル
  otherPaymentCycle?: string; // その他(支払いのサイクル)
  otherSharedMatters: string; // その他経理チーム向け共有事項
};
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
