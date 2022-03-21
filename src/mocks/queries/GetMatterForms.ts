import faker from "@faker-js/faker";
import { MatterFormData } from "components/screens/paidMemberMng/matterForm/index/hooks";
import { graphql } from "msw";

const MOCK: MatterFormData = {
  firstFormData: {
    introducer: "",
    contractDate: "20200101",
    contractType: "New",
    contractor: "Example 契約獲得者",
    applicationFormData: [],
    businessCardPic: [],
    closingUrl: "",
    closingUrlDescription: "",
    closingDocument: [],
    initialBillingAmount: "",
    initialBillingBreakdowns: [],
  },
  selectContractTypeFormData: {
    selectContractType: "ChiraCeo",
  },
  contractTypeFormData: {
    companyName: "Example 会社名",
    url: "https://example.com",
    employeeSize: "LessThan6",
    postCode: "",
    address: "東京都港区N-N-N",
    telNumberCompany: "00-0000-0000",
    telNumberManagerPhone: "",
    managerName: "Example 担当者",
    managerRole: "",
    managerMailAddress: "example-manager@example.com",
    accountingRoleName: "Example 先方経理担当者名",
    invoiceShippingMailAddress: "example-invoice@example.com",
    contractPlan: "Light",
    initialCost: "240000",
    monthlyAmount: "120000",
    firstConsultingDay: "",
    contractStartDate: "",
    contractEndDate: "",
    paymentMethod: "CreditCard",
  },
  paymentMethodFormData: {
    firstWithdrawalDate: "20000101",
    paymentCycle: "Onetime",
    otherPaymentCycle: undefined,
    otherSharedMatters: "",
  },
  onBoardingFormData: {
    firstConsultationStartTime: "",
    firstConsultantMain: "",
    firstConsultantSub: "",
    kickoffLocation: "",
    specialMattersColumn: "",
    howToUseIntrinsicValue: "",
    intrinsicValueKpi: "",
    howToUseCurrentValue: "",
    currentValueKpi: "",
    serviceContents: "",
    serviceMaterials: "",
    otherSharedMattersForKickoffStaff: "",
  },
};

export const GetMatterForms = graphql.query(
  "GetMatterForms",
  (req, res, ctx) => {
    return res(
      ctx.data({
        forms: [...Array(100)].map((_) => ({
          ...MOCK,
          firstFormData: {
            ...MOCK.firstFormData,
            contractor: faker.name.findName(),
          },
          contractTypeFormData: {
            ...MOCK.contractTypeFormData,
            telNumberCompany:
              Math.random() > 0.5
                ? faker.phone.phoneNumber("03-####-####")
                : faker.phone.phoneNumber("0##-###-####"),
            managerMailAddress: faker.internet.email(),
            invoiceShippingMailAddress: faker.internet.email(),
          },
        })),
      })
    );
  }
);
