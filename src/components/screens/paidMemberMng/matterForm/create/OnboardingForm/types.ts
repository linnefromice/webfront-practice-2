export const FormDataKeys = [
  "firstConsultationStartTime",
  "firstConsultantMain",
  "firstConsultantSub",
  "kickoffLocation",
  "specialMattersColumn",
  "howToUseIntrinsicValue",
  "intrinsicValueKpi",
  "howToUseCurrentValue",
  "currentValueKpi",
  "serviceContents",
  "serviceMaterials",
  "otherSharedMattersForKickoffStaff",
];
type FormDataKey = typeof FormDataKeys[number];

export type FormData = {
  firstConsultationStartTime: string; // 初回コンサル開始時刻
  firstConsultantMain: string; // 初回コンサル担当(メイン)
  firstConsultantSub: string; // 初回コンサル担当(サブ)
  kickoffLocation: string; // キックオフ実施場所
  specialMattersColumn: string; // 特別事項欄
  howToUseIntrinsicValue: string; // 本質的価値の利用方法
  intrinsicValueKpi: string; // 本質的価値のAPI
  howToUseCurrentValue: string; // 現在的価値の利用方法
  currentValueKpi: string; // 現在的価値のAPI
  serviceContents: string; // サービス内容
  serviceMaterials: string; // サービス資料
  otherSharedMattersForKickoffStaff: string; // その他キックオフ担当向け共有事項
};

export const FormDataLabels: { [key in FormDataKey]: string } = {
  firstConsultationStartTime: "初回コンサル開始時刻",
  firstConsultantMain: "初回コンサル担当(メイン)",
  firstConsultantSub: "初回コンサル担当(サブ)",
  kickoffLocation: "キックオフ実施場所",
  specialMattersColumn: "特別事項欄",
  howToUseIntrinsicValue: "本質的価値の利用方法",
  intrinsicValueKpi: "本質的価値のKPI",
  howToUseCurrentValue: "現在的価値の利用方法",
  currentValueKpi: "現在的価値のKPI",
  serviceContents: "サービス内容",
  serviceMaterials: "サービス資料",
  otherSharedMattersForKickoffStaff: "その他キックオフ担当向け共有事項",
} as const;
