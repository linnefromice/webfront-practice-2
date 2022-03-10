export const MANAGER_ROLES = [
  "Chairman", // 会長
  "President", // 社長
  "Director", // 取締役
  "ExecutiveOfficer", // 執行役員
  "SalesManager", // 営業部長
  "MarketingManager", // マーケティング部長
  "OtherGeneralManager", // その他部長
  "OtherAuthorizers", // その他決裁者(部長以下)]
] as const;
type ManagerRole = typeof MANAGER_ROLES[number];
export const MANAGER_ROLE_LABELS: { [key in ManagerRole]: string } = {
  Chairman: "会長",
  President: "社長",
  Director: "取締役",
  ExecutiveOfficer: "執行役員",
  SalesManager: "営業部長",
  MarketingManager: "マーケティング部長",
  OtherGeneralManager: "その他部長",
  OtherAuthorizers: "その他決裁者(部長以下)",
};

export const CONTACT_METHODS = [
  "Mail",
  "Messanger",
  "Chatwork",
  "Slack",
] as const;
type ContactMethod = typeof CONTACT_METHODS[number];

export const PLANS = [
  "NewLightPlan", // 新ライトプラン
  "NewBasicPlan", // 新ベーシックプラン
  "NewPremiumPlan", // 新プレミアムプラン
  "LightPlan", // ライトプラン
  "BasicPlan", // ベーシックプラン
  "PremiumPlan", // プレミアムプラン
] as const;
type Plan = typeof PLANS[number];
export const PLAN_LABELS: { [key in Plan]: string } = {
  NewLightPlan: "新ライトプラン",
  NewBasicPlan: "新ベーシックプラン",
  NewPremiumPlan: "新プレミアムプラン",
  LightPlan: "ライトプラン",
  BasicPlan: "ベーシックプラン",
  PremiumPlan: "プレミアムプラン",
};

export const NEEDS = [
  "AppointmentCuzNoConductor", // アポが取れない/導線がない -> アポが成果
  "AppointmentCuzCannotGetByAd", // 広告などで取れない層を取りたい -> アポが成果
  "ConclusionOfContractCuzLongLeadTime", // リードタイムをなんとかしたい -> 成約が成果
  "SettlorAppointment", // 決裁者にしか売れない -> 決裁者アポが成果
  "AppointmentCuzLastFallbackPlan", // 最後の頼みの綱 -> アポパターン -> アポ
  "LearnedOutboundForFirstTime", // アウトバウンドを初めて知る
  "TargetMatch", // ターゲットの一致
  "LookingForBusinessPartner", // パートナーを探したい
  "ToMeetGoodPerson", // いい人に会いたい(ピュア)
  "Other", // その他
] as const;
type Needs = typeof NEEDS[number];
export const NEEDS_LABELS: { [key in Needs]: string } = {
  AppointmentCuzNoConductor: "アポが取れない/導線がない -> アポが成果",
  AppointmentCuzCannotGetByAd: "広告などで取れない層を取りたい -> アポが成果",
  ConclusionOfContractCuzLongLeadTime:
    "リードタイムをなんとかしたい -> 成約が成果",
  SettlorAppointment: "決裁者にしか売れない -> 決裁者アポが成果",
  AppointmentCuzLastFallbackPlan: "最後の頼みの綱 -> アポパターン -> アポ",
  LearnedOutboundForFirstTime: "アウトバウンドを初めて知る",
  TargetMatch: "ターゲットの一致",
  LookingForBusinessPartner: "パートナーを探したい",
  ToMeetGoodPerson: "いい人に会いたい(ピュア)",
  Other: "その他",
};

export const VALUES_SOUGHT = [
  "EndUserAcquisition", // エンドユーザーの獲得
  "ObtainingBusinessPartners", // 協業できるパートナーの獲得
  "ReductionOfSalesManHours", // 営業工数の削減
  "FormingConnectionsWithQualityDecisionMakers", // 優良決裁者との人脈形成
  "SteadyAcquisitionOfAppointments", // アポイントメントの定常獲得
  "ResearchAndDevelopmentOfCommercialProducts", // 商材のR&D
  "ImproveSalesMethod", // 営業方法の改善をしたい
  "Other", // その他
] as const;
type ValueSought = typeof VALUES_SOUGHT[number];
export const VALUES_SOUGHT_LABELS: { [key in ValueSought]: string } = {
  EndUserAcquisition: "エンドユーザーの獲得",
  ObtainingBusinessPartners: "協業できるパートナーの獲得",
  ReductionOfSalesManHours: "営業工数の削減",
  FormingConnectionsWithQualityDecisionMakers: "優良決裁者との人脈形成",
  SteadyAcquisitionOfAppointments: "アポイントメントの定常獲得",
  ResearchAndDevelopmentOfCommercialProducts: "商材のR&D",
  ImproveSalesMethod: "営業方法の改善をしたい",
  Other: "その他",
};

export const AVERAGE_LEAD_TIME_MONTH = [
  "LessThanThree", // ~3ヶ月
  "FromFourToSix", // 3~6ヶ月
  "FromSixToNine", // 6~9ヶ月
  "FromNineToTwelve", // 9~12ヶ月
];
type AverageLeadTimeMonth = typeof AVERAGE_LEAD_TIME_MONTH[number];
export const AVERAGE_LEAD_TIME_MONTH_LABELS: {
  [key in AverageLeadTimeMonth]: string;
} = {
  LessThanThree: "~3ヶ月",
  FromFourToSix: "3ヶ月~6ヶ月",
  FromSixToNine: "6ヶ月~9ヶ月",
  FromNineToTwelve: "9ヶ月~12ヶ月",
};

export const STATUS = ["OK", "InSomeCases", "NG"];
type Status = typeof STATUS[number];
export const STATUS_LABELS: { [key in Status]: string } = {
  OK: "○",
  InSomeCases: "△",
  NG: "×",
};

export const RESOURCE_STATUS = ["1", "2", "3", "4", "5"];
type ResourceStatus = typeof RESOURCE_STATUS[number];

export const EMPLOYEE_SIZES = [
  "MoreThan3001", // 3001人以上
  "From1001To3000", // 1001~3000人
  "From501To1000", // 501~1000人
  "From301To500", // 301~500人
  "From101To300", // 101~300人
  "From51To100", // 51~100人
  "From31To50", // 31~50人
  "From11To30", // 11~30人
  "From6To10", // 6~10人
  "LessThan5", // 5人以下
] as const;
type EmployeeSize = typeof EMPLOYEE_SIZES[number];
export const EMPLOYEE_SIZES_LABELS: { [key in EmployeeSize]: string } = {
  MoreThan3001: "3001人以上",
  From1001To3000: "1001~3000人",
  From501To1000: "501~1000人",
  From301To500: "301~500人",
  From101To300: "101~300人",
  From51To100: "51~100人",
  From31To50: "31~50人",
  From11To30: "11~30人",
  From6To10: "6~10人",
  LessThan5: "5人以下",
};

export const INDUSTRIES = [
  "InformationTechnology", // IT・情報通信業
  "TrainingConsulting", // 研修・コンサル
  "AdvertisingMarketing", // 広告・マーケティング・制作
  "MedicalNursingHealth", // 医療・介護・健康
  "HumanResources", // 人材(採用・派遣)
  "BPOSubcontracting", // BPO・業務委託
  "Finance", // 金融
  "Professional", // 士業(会計士・税理士・社労士・弁護士)
  "ArchitectureRealEstate", // 建築・不動産
  "ManufacturingIndustry", // 製造業
  "ECSiteManagement", // ECサイト運営
  "WholesaleRetailBusiness", // 卸売業・小売業
  "FoodAndDrinkService", // 飲食・サービス
  "RestaurantActualStore", // 飲食店・実店舗
] as const;
type Industry = typeof INDUSTRIES[number];
export const INDUSTRIES_LABELS: { [key in Industry]: string } = {
  InformationTechnology: "IT・情報通信業",
  TrainingConsulting: "研修・コンサル",
  AdvertisingMarketing: "広告・マーケティング・制作",
  MedicalNursingHealth: "医療・介護・健康",
  HumanResources: "人材(採用・派遣)",
  BPOSubcontracting: "BPO・業務委託",
  Finance: "金融",
  Professional: "士業(会計士・税理士・社労士・弁護士)",
  ArchitectureRealEstate: "建築・不動産",
  ManufacturingIndustry: "製造業",
  ECSiteManagement: "ECサイト運営",
  WholesaleRetailBusiness: "卸売業・小売業",
  FoodAndDrinkService: "飲食・サービス",
  RestaurantActualStore: "飲食店・実店舗",
};

export const PRODUCT_CATEGORIES = [
  "SalesSupport", // 営業支援
  "RecruitmentSupport", // 採用支援
  "DevelopmentRelated", // 制作・開発関連
  "Office", // オフィス関連
  "EmployeeSupport", // 従業員支援関連
  "Other", // その他
] as const;
type ProductCategory = typeof PRODUCT_CATEGORIES[number];
export const PRODUCT_CATEGORIES_LABELS: { [key in ProductCategory]: string } = {
  SalesSupport: "営業支援",
  RecruitmentSupport: "採用支援",
  DevelopmentRelated: "制作・開発関連",
  Office: "オフィス関連",
  EmployeeSupport: "従業員支援関連",
  Other: "その他",
};

export type FormData = {
  hubspotId: string; // ハブスポットID
  otsunagiManager: string; // おつなぎ担当者
  otsunagiMailAddress: string; // おつなぎメールアドレス
  otsunagiManagerTelNumber: string; // おつなぎ担当者連絡先(電話番号)
  otsunagiManagerRole: ManagerRole; // おつなぎ担当者の役職
  contactMethodWithOtsunagiManager: ContactMethod; // おつなぎ担当者との連絡方法
  operationStartDate: string; // 稼働開始年月日
  contractEndDate: string; // 契約終了年月日
  plan: Plan; // プラン
  needsInIntroduction: Needs; // 導入時のニーズ
  introductionBackground: string; // チラCEOの導入背景
  valueSought: ValueSought; // チラCEOに求める価値
  kpiMonthlyAppointments: string; // KPI月間アポ数
  averageMonthlyUnitPrice: string; // 平均月額単価
  averageNumberOfContractMonths: string; // 平均契約月数
  averageLeadTimeMonth: AverageLeadTimeMonth; // 平均リードタイム
  idealProductTarget: string; // 理想の商材ターゲット
  enableToBusinessAllianceAppointment: Status; // 業務提携アポは問題ないか？
  serviceThatCannotReceiveMutualProposal: ProductCategory; // 相互提案が受けられないサービス
  resourceStatusInThreeMonth: ResourceStatus; // 直近3ヶ月のリソース状況
  frontManager: string; // フロント担当者
  employeeSize: EmployeeSize; // 顧客の従業員規模
  industry: Industry; // 業種
  productCategory: ProductCategory; // 商材カテゴリ
  serviceName: string; // サービス名
  serviceUrl: string; // サービスURL
  introduction: string; // 紹介文
};

export const FormDataLabels: { [key in keyof FormData]: string } = {
  hubspotId: "ハブスポットID",
  otsunagiManager: "おつなぎ担当者",
  otsunagiMailAddress: "おつなぎメールアドレス",
  otsunagiManagerTelNumber: "おつなぎ担当者連絡先(電話番号)",
  otsunagiManagerRole: "おつなぎ担当者の役職",
  contactMethodWithOtsunagiManager: "おつなぎ担当者との連絡方法",
  operationStartDate: "稼働開始年月日",
  contractEndDate: "契約終了年月日",
  plan: "プラン",
  needsInIntroduction: "導入時のニーズ",
  introductionBackground: "チラCEOの導入背景",
  valueSought: "チラCEOに求める価値",
  kpiMonthlyAppointments: "KPI月間アポ数",
  averageMonthlyUnitPrice: "平均月額単価",
  averageNumberOfContractMonths: "平均契約月数",
  averageLeadTimeMonth: "平均リードタイム",
  idealProductTarget: "理想の商材ターゲット",
  enableToBusinessAllianceAppointment: "業務提携アポは問題ないか？",
  serviceThatCannotReceiveMutualProposal: "相互提案が受けられないサービス",
  resourceStatusInThreeMonth: "直近3ヶ月のリソース状況",
  frontManager: "フロント担当者",
  employeeSize: "顧客の従業員規模",
  industry: "業種",
  productCategory: "商材カテゴリ",
  serviceName: "サービス名",
  serviceUrl: "サービスURL",
  introduction: "紹介文",
};
