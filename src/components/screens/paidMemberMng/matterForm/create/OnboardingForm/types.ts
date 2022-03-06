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
