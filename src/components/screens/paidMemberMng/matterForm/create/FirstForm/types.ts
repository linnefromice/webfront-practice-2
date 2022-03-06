type InitialBillingBreakdownData = {
  amount: number;
  description: string;
};

export type FormData = {
  introducer: string; // 受注企業を紹介した企業
  contractDate: string; // 契約日
  contractType: string; // 契約種別
  contractor: string; // 契約獲得者
  applicationFormData: File[]; // 申込書PDFデータ
  businessCardPic: File[]; // 名刺写真
  closingUrl: string; // クロージング現場の音源URL
  closingUrlDescription: string; // クロージング現場の音源説明
  closingDocument: File[]; // クロージング資料
  initialBillingAmount: string; // 初回請求額
  initialBillingBreakdowns: InitialBillingBreakdownData[]; // 初回請求内訳
};
