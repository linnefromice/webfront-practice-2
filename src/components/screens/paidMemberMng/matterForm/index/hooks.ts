import request from "graphql-request";
import useSWR from "swr";
import { MatterFormInfo } from "../create/types";

const GRAPHQL_API_ENDPOINT = "http://localhost:3000/graphql";

export type MatterFormData = Required<Omit<MatterFormInfo, "currentPage">>;

type FetchData = {
  forms: MatterFormData[];
};
const QUERY = `query GetMatterForms {
  forms {
    firstFormData {
      introducer
      contractDate
      contractType
      contractor
      applicationFormData
      businessCardPic
      closingUrl
      closingUrlDescription
      closingDocument
      initialBillingAmount
      initialBillingBreakdowns
    }
    selectContractTypeFormData {
      selectContractType
    }
    contractTypeFormData {
      companyName
      url
      employeeSize
      postCode
      address
      telNumberCompany
      telNumberManagerPhone
      managerName
      managerRole
      managerMailAddress
      accountingRoleName
      invoiceShippingMailAddress
      contractPlan
      initialCost
      monthlyAmount
      firstConsultingDay
      contractStartDate
      contractEndDate
      paymentMethod
    }
    paymentMethodFormData {
      firstWithdrawalDate
      paymentCycle
      otherPaymentCycle
      otherSharedMatters
    }
    onBoardingFormData {
      firstConsultationStartTime
      firstConsultantMain
      firstConsultantSub
      kickoffLocation
      specialMattersColumn
      howToUseIntrinsicValue
      intrinsicValueKpi
      howToUseCurrentValue
      currentValueKpi
      serviceContents
      serviceMaterials
      otherSharedMattersForKickoffStaff
    }
  }
}`;

export const useSWRForms = () =>
  useSWR<FetchData>(QUERY, (query) => request(GRAPHQL_API_ENDPOINT, query));
