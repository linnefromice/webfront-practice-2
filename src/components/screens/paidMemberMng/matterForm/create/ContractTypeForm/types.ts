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

export const ContractPlan = {
  Light: "ライトプラン",
  Basic: "ベーシックプラン",
  Premium: "プレミアムプラン",
  MajorDevelopment: "大手開拓プラン",
} as const;
type ContractPlanKeyType = keyof typeof ContractPlan;
export type ChiraCeoFormData = CommonFormData & {
  companyName: string; // 企業名
  url: string; // URL
  employeeSize: string; // 従業員規模
  postCode: string; // 郵便番号
  address: string; // 住所
  telNumberCompany: string; // 電話番号(会社)
  telNumberManagerPhone: string; // 電話番号(担当者携帯)
  managerName: string; // 担当者名
  managerRole: string; // 担当者役職
  managerMailAddress: string; // 担当者メールアドレス
  accountingRoleName: string; // 先方経理担当者名
  invoiceShippingMailAddress: string; // 請求書送付先メールアドレス
  contractPlan: ContractPlanKeyType; // 契約プラン
  initialCost: string; // 初期費用(税抜)
  monthlyAmount: string; // 月額(税抜)
  firstConsultingDay: string; // 初回コンサル日
  contractStartDate: string; // 契約開始日
  contractEndDate: string; // 契約終了日
};
export type JoiningAgencyFormData = CommonFormData & {};
export type LetterMeasuresAndChiraCeoFormData = CommonFormData & {};
export type LetterGetFormData = CommonFormData & {};

export type FormData =
  | ChiraCeoFormData
  | JoiningAgencyFormData
  | LetterMeasuresAndChiraCeoFormData
  | LetterGetFormData;