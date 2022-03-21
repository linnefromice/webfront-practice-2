import request from "graphql-request";
import useSWR from "swr";
import { FormData } from "../create/types";

const GRAPHQL_API_ENDPOINT = "http://localhost:3000/graphql";
type FetchData = {
  forms: FormData[];
};
const QUERY = `query GetConsultingForms {
  forms {
    otsunagiManager
    otsunagiMailAddress
    otsunagiManagerTelNumber
    otsunagiManagerRole
    contactMethodWithOtsunagiManager
    operationStartDate
    contractEndDate
    plan
    needsInIntroduction
    valueSought
    kpiMonthlyAppointments
    averageMonthlyUnitPrice
    averageNumberOfContractMonths
    averageLeadTimeMonth
    idealProductTarget
    enableToBusinessAllianceAppointment
    serviceThatCannotReceiveMutualProposal
    resourceStatusInThreeMonth
    frontManager
    employeeSize
    industry
    productCategory
    serviceUrl
    introduction
  }
}`;

export const useSWRForms = () =>
  useSWR<FetchData>(QUERY, (query) => request(GRAPHQL_API_ENDPOINT, query));
