type InitialBillingBreakdownData = {
  amount: number;
  description: string;
};

export const ContractType = {
  New: "新規",
  Renewal: "更新",
  ContentRenewal: "内容更新",
  Cancellation: "解約",
} as const;
export type ContractTypeKeyType = keyof typeof ContractType;

export const FormDataKeys = [
  "introducer",
  "contractDate",
  "contractType",
  "contractor",
  "applicationFormData",
  "businessCardPic",
  "closingUrl",
  "closingUrlDescription",
  "closingDocument",
  "initialBillingAmount",
  "initialBillingBreakdowns",
];
type FormDataKey = typeof FormDataKeys[number];

export type FormData = {
  introducer: string; // 受注企業を紹介した企業
  contractDate: string; // 契約日
  contractType: ContractTypeKeyType; // 契約種別
  contractor: string; // 契約獲得者
  applicationFormData: File[]; // 申込書PDFデータ
  businessCardPic: File[]; // 名刺写真
  closingUrl: string; // クロージング現場の音源URL
  closingUrlDescription: string; // クロージング現場の音源説明
  closingDocument: File[]; // クロージング資料
  initialBillingAmount: string; // 初回請求額
  initialBillingBreakdowns: InitialBillingBreakdownData[]; // 初回請求内訳
};

export const FormDataLabels: { [key in FormDataKey]: string } = {
  introducer: "今回受注企業を紹介くださった企業",
  contractDate: "契約日",
  contractType: "契約種別",
  contractor: "契約獲得者",
  applicationFormData: "申込書PDFデータ",
  businessCardPic: "名刺写真",
  closingUrl: "音源ラベル",
  closingUrlDescription: "音源URL",
  closingDocument: "クロージング資料",
  initialBillingAmount: "初回請求額",
  initialBillingBreakdowns: "初回請求内訳",
} as const;
