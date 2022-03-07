import { PaymentMethodKeyType } from "../types";

type CommonFormData = {
  paymentMethod: PaymentMethodKeyType;
  otherPaymentMethod?: string;
};

export const EmployeeSize = {
  LessThan6: "5名以下",
  Between6And10: "6 ~ 10名",
  Between11And20: "11 ~ 20名",
  Between21And30: "21 ~ 30名",
  Between31And40: "31 ~ 40名",
  Between41And50: "41 ~ 50名",
  Between51And80: "51 ~ 80名",
  Between81And100: "81 ~ 100名",
  Between101And150: "101 ~ 150名",
  Between151And300: "151 ~ 300名",
  MoreThan300: "301名以上",
};
export type EmployeeSizeKeyType = keyof typeof EmployeeSize;
export const ContractPlan = {
  Light: "ライトプラン",
  Basic: "ベーシックプラン",
  Premium: "プレミアムプラン",
  MajorDevelopment: "大手開拓プラン",
} as const;
export type ContractPlanKeyType = keyof typeof ContractPlan;
export type ChiraCeoFormData = CommonFormData & {
  companyName: string; // 企業名
  url: string; // URL
  employeeSize: EmployeeSizeKeyType; // 従業員規模
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
export const ChiraCeoFormDataLabels: {
  [key in keyof Required<ChiraCeoFormData>]: string;
} = {
  paymentMethod: "支払方法",
  otherPaymentMethod: "支払方法がその他の場合は入力",
  companyName: "企業名",
  url: "URL",
  employeeSize: "従業員規模",
  postCode: "郵便番号",
  address: "住所",
  telNumberCompany: "電話番号(会社)",
  telNumberManagerPhone: "電話番号(担当者携帯)",
  managerName: "担当者名",
  managerRole: "担当者役職",
  managerMailAddress: "担当者メールアドレス",
  accountingRoleName: "先方経理担当者名",
  invoiceShippingMailAddress: "請求書送付先メールアドレス",
  contractPlan: "契約プラン",
  initialCost: "初期費用(税抜)",
  monthlyAmount: "月額(税抜)",
  firstConsultingDay: "初回コンサル日",
  contractStartDate: "契約開始日",
  contractEndDate: "契約終了日",
};

export type JoiningAgencyFormData = CommonFormData & {
  dummyKey: string;
};
export type LetterMeasuresAndChiraCeoFormData = CommonFormData & {
  dummyKey: string;
};
export type LetterGetFormData = CommonFormData & {
  dummyKey: string;
};

export type FormData =
  | ChiraCeoFormData
  | JoiningAgencyFormData
  | LetterMeasuresAndChiraCeoFormData
  | LetterGetFormData;
