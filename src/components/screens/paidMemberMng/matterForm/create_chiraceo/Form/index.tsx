import { Stack } from "@mui/material";
import { RadioGroup, TextField } from "components/uiParts";
import { VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  AVERAGE_LEAD_TIME_MONTH,
  AVERAGE_LEAD_TIME_MONTH_LABELS,
  CONTACT_METHODS,
  EMPLOYEE_SIZES,
  EMPLOYEE_SIZES_LABELS,
  FormData,
  FormDataLabels,
  INDUSTRIES,
  INDUSTRIES_LABELS,
  MANAGER_ROLES,
  MANAGER_ROLE_LABELS,
  NEEDS,
  NEEDS_LABELS,
  PLANS,
  PLAN_LABELS,
  PRODUCT_CATEGORIES,
  PRODUCT_CATEGORIES_LABELS,
  RESOURCE_STATUS,
  STATUS,
  STATUS_LABELS,
  VALUES_SOUGHT,
  VALUES_SOUGHT_LABELS,
} from "../types";

export const Contents: VFC = () => {
  const methods = useForm<FormData>();
  const onSubmit = (v: FormData) => console.log(v); // Temporary
  const onError = (e: any) => console.log(e); // Temporary

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          <TextField formDataKey="hubspotId" label={FormDataLabels.hubspotId} />
          <TextField
            formDataKey="otsunagiManager"
            label={FormDataLabels.otsunagiManager}
          />
          <TextField
            formDataKey="otsunagiMailAddress"
            label={FormDataLabels.otsunagiMailAddress}
          />
          <TextField
            formDataKey="otsunagiManagerTelNumber"
            label={FormDataLabels.otsunagiManagerTelNumber}
          />
          <RadioGroup
            formDataKey={`otsunagiManagerRole`}
            label={FormDataLabels.otsunagiManagerRole}
            id={`otsunagiManagerRole`}
            choices={MANAGER_ROLES.map((v) => ({
              label: MANAGER_ROLE_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <RadioGroup
            formDataKey={`contactMethodWithOtsunagiManager`}
            label={FormDataLabels.contactMethodWithOtsunagiManager}
            id={`contactMethodWithOtsunagiManager`}
            choices={CONTACT_METHODS.map((v) => ({
              label: v,
              value: v,
            }))}
            direction={"row"}
          />
          <TextField
            formDataKey="operationStartDate"
            label={FormDataLabels.operationStartDate}
          />
          <TextField
            formDataKey="contractEndDate"
            label={FormDataLabels.contractEndDate}
          />
          <RadioGroup
            formDataKey={`plan`}
            label={FormDataLabels.plan}
            id={`plan`}
            choices={PLANS.map((v) => ({
              label: PLAN_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <RadioGroup
            formDataKey={`needsInIntroduction`}
            label={FormDataLabels.needsInIntroduction}
            id={`needsInIntroduction`}
            choices={NEEDS.map((v) => ({
              label: NEEDS_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <TextField
            formDataKey="introductionBackground"
            label={FormDataLabels.introductionBackground}
          />
          <RadioGroup
            formDataKey={`valueSought`}
            label={FormDataLabels.valueSought}
            id={`valueSought`}
            choices={VALUES_SOUGHT.map((v) => ({
              label: VALUES_SOUGHT_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <TextField
            formDataKey="kpiMonthlyAppointments"
            label={FormDataLabels.kpiMonthlyAppointments}
          />
          <TextField
            formDataKey="averageMonthlyUnitPrice"
            label={FormDataLabels.kpiMonthlyAppointments}
          />
          <TextField
            formDataKey="averageNumberOfContractMonths"
            label={FormDataLabels.kpiMonthlyAppointments}
          />
          <RadioGroup
            formDataKey={`averageLeadTimeMonth`}
            label={FormDataLabels.valueSought}
            id={`averageLeadTimeMonth`}
            choices={AVERAGE_LEAD_TIME_MONTH.map((v) => ({
              label: AVERAGE_LEAD_TIME_MONTH_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <TextField
            formDataKey="idealProductTarget"
            label={FormDataLabels.idealProductTarget}
          />
          <RadioGroup
            formDataKey={`enableToBusinessAllianceAppointment`}
            label={FormDataLabels.enableToBusinessAllianceAppointment}
            id={`enableToBusinessAllianceAppointment`}
            choices={STATUS.map((v) => ({
              label: STATUS_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <RadioGroup
            formDataKey={`serviceThatCannotReceiveMutualProposal`}
            label={FormDataLabels.serviceThatCannotReceiveMutualProposal}
            id={`serviceThatCannotReceiveMutualProposal`}
            choices={PRODUCT_CATEGORIES.map((v) => ({
              label: PRODUCT_CATEGORIES_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <RadioGroup
            formDataKey={`resourceStatusInThreeMonth`}
            label={FormDataLabels.resourceStatusInThreeMonth}
            id={`resourceStatusInThreeMonth`}
            choices={RESOURCE_STATUS.map((v) => ({
              label: v,
              value: v,
            }))}
            direction={"row"}
          />
          <TextField
            formDataKey="frontManager"
            label={FormDataLabels.frontManager}
          />
          <RadioGroup
            formDataKey={`employeeSize`}
            label={FormDataLabels.employeeSize}
            id={`employeeSize`}
            choices={EMPLOYEE_SIZES.map((v) => ({
              label: EMPLOYEE_SIZES_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <RadioGroup
            formDataKey={`industry`}
            label={FormDataLabels.industry}
            id={`industry`}
            choices={INDUSTRIES.map((v) => ({
              label: INDUSTRIES_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <RadioGroup
            formDataKey={`productCategory`}
            label={FormDataLabels.productCategory}
            id={`productCategory`}
            choices={PRODUCT_CATEGORIES.map((v) => ({
              label: PRODUCT_CATEGORIES_LABELS[v],
              value: v,
            }))}
            direction={"row"}
          />
          <TextField
            formDataKey="serviceName"
            label={FormDataLabels.serviceName}
          />
          <TextField
            formDataKey="serviceUrl"
            label={FormDataLabels.serviceUrl}
          />
          <TextField
            formDataKey="introduction"
            label={FormDataLabels.introduction}
          />
        </Stack>
      </form>
    </FormProvider>
  );
};

export const Form: VFC = () => {
  return <Contents />;
};
