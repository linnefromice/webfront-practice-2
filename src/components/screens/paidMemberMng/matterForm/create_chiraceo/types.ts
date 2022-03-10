type ManagerRole =
  | "Chairman" // 会長
  | "President" // 社長
  | "Director" // 取締役
  | "ExecutiveOfficer" // 執行役員
  | "SalesManager" // 営業部長
  | "MarketingManager" // マーケティング部長
  | "OtherGeneralManager" // その他部長
  | "OtherAuthorizers"; // その他決裁者(部長以下)
export const ManagerRoleLabels: { [key in ManagerRole]: string } = {
  Chairman: "会長",
  President: "社長",
  Director: "取締役",
  ExecutiveOfficer: "執行役員",
  SalesManager: "営業部長",
  MarketingManager: "マーケティング部長",
  OtherGeneralManager: "その他部長",
  OtherAuthorizers: "その他決裁者(部長以下)",
};

type ContactMethod = "Mail" | "Messanger" | "Chatwork" | "Slack";

type Plan =
  | "NewLightPlan" // 新ライトプラン
  | "NewBasicPlan" // 新ベーシックプラン
  | "NewPremiumPlan" // 新プレミアムプラン
  | "LightPlan" // ライトプラン
  | "BasicPlan" // ベーシックプラン
  | "PremiumPlan"; // プレミアムプラン
export const PlanLabels: { [key in Plan]: string } = {
  NewLightPlan: "新ライトプラン",
  NewBasicPlan: "新ベーシックプラン",
  NewPremiumPlan: "新プレミアムプラン",
  LightPlan: "ライトプラン",
  BasicPlan: "ベーシックプラン",
  PremiumPlan: "プレミアムプラン",
};

type Needs =
  | "AppointmentCuzNoConductor" // アポが取れない/導線がない -> アポが成果
  | "AppointmentCuzCannotGetByAd" // 広告などで取れない層を取りたい -> アポが成果
  | "ConclusionOfContractCuzLongLeadTime" // リードタイムをなんとかしたい -> 成約が成果
  | "SettlorAppointment" // 決裁者にしか売れない -> 決裁者アポが成果
  | "AppointmentCuzLastFallbackPlan" // 最後の頼みの綱 -> アポパターン -> アポ
  | "LearnedOutboundForFirstTime" // アウトバウンドを初めて知る
  | "TargetMatch" // ターゲットの一致
  | "LookingForBusinessPartner" // パートナーを探したい
  | "ToMeetGoodPerson" // いい人に会いたい(ピュア)
  | "Other"; // その他
export const NeedsLabels: { [key in Needs]: string } = {
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

type ValueSought =
  | "EndUserAcquisition" // エンドユーザーの獲得
  | "ObtainingBusinessPartners" // 協業できるパートナーの獲得
  | "ReductionOfSalesManHours" // 営業工数の削減
  | "FormingConnectionsWithQualityDecisionMakers" // 優良決裁者との人脈形成
  | "SteadyAcquisitionOfAppointments" // アポイントメントの定常獲得
  | "ResearchAndDevelopmentOfCommercialProducts" // 商材のR&D
  | "ImproveSalesMethod" // 営業方法の改善をしたい
  | "Other"; // その他
export const ValueSoughtLabels: { [key in ValueSought]: string } = {
  EndUserAcquisition: "エンドユーザーの獲得",
  ObtainingBusinessPartners: "協業できるパートナーの獲得",
  ReductionOfSalesManHours: "営業工数の削減",
  FormingConnectionsWithQualityDecisionMakers: "優良決裁者との人脈形成",
  SteadyAcquisitionOfAppointments: "アポイントメントの定常獲得",
  ResearchAndDevelopmentOfCommercialProducts: "商材のR&D",
  ImproveSalesMethod: "営業方法の改善をしたい",
  Other: "その他",
};

type AverageLeadTimeMonth =
  | "LessThanThree" // ~3ヶ月
  | "FromFourToSix" // 3~6ヶ月
  | "FromSixToNine" // 6~9ヶ月
  | "FromNineToTwelve"; // 9~12ヶ月
export const AverageLeadTimeMonthLabels: {
  [key in AverageLeadTimeMonth]: string;
} = {
  LessThanThree: "~3ヶ月",
  FromFourToSix: "3ヶ月~6ヶ月",
  FromSixToNine: "6ヶ月~9ヶ月",
  FromNineToTwelve: "9ヶ月~12ヶ月",
};

type Status = "OK" | "InSomeCases" | "NG";
export const StatusLabels: { [key in Status]: string } = {
  OK: "○",
  InSomeCases: "△",
  NG: "×",
};

type ResourceStatus = 1 | 2 | 3 | 4 | 5;

type EmployeeSize =
  | "MoreThan3001" // 3001人以上
  | "From1001To3000" // 1001~3000人
  | "From501To1000" // 501~1000人
  | "From301To500" // 301~500人
  | "From101To300" // 101~300人
  | "From51To100" // 51~100人
  | "From31To50" // 31~50人
  | "From11To30" // 11~30人
  | "From6To10" // 6~10人
  | "LessThan5"; // 5人以下
export const EmployeeSizeLabels: { [key in EmployeeSize]: string } = {
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

type Industry =
  | "InformationTechnology" // IT・情報通信業
  | "TrainingConsulting" // 研修・コンサル
  | "AdvertisingMarketing" // 広告・マーケティング・制作
  | "MedicalNursingHealth" // 医療・介護・健康
  | "HumanResources" // 人材(採用・派遣)
  | "BPOSubcontracting" // BPO・業務委託
  | "Finance" // 金融
  | "Professional" // 士業(会計士・税理士・社労士・弁護士)
  | "ArchitectureRealEstate" // 建築・不動産
  | "ManufacturingIndustry" // 製造業
  | "ECSiteManagement" // ECサイト運営
  | "WholesaleRetailBusiness" // 卸売業・小売業
  | "FoodAndDrinkService" // 飲食・サービス
  | "RestaurantActualStore"; // 飲食店・実店舗
export const IndustryLabels: { [key in Industry]: string } = {
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

type ProductCategory =
  | "SalesSupport" // 営業支援
  | "RecruitmentSupport" // 採用支援
  | "DevelopmentRelated" // 制作・開発関連
  | "Office" // オフィス関連
  | "EmployeeSupport" // 従業員支援関連
  | "Other"; // その他
export const ProductCategoryLabels: { [key in ProductCategory]: string } = {
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
  resourceStatusInThreeMonth: ResourceStatus; // 3ヶ月のリソース状況
  frontManager: string; // フロント担当者
  employeeSize: EmployeeSize; // 顧客の従業員規模
  industry: Industry; // 業種
  productCategory: ProductCategory; // 商材カテゴリ
  serviceName: string; // サービス名
  serviceUrl: string; // サービスURL
  introduction: string; // 紹介文
};
