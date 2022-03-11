import { Stack } from "@mui/material";
import {
  RadioGroup,
  RadioGroupProps,
  TextField,
  TextFieldProps,
} from "components/uiParts";
import { useCommonHooks } from "libs/utils";
import { Fragment, VFC } from "react";
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

type CommonCreateInputArgs = { formDataKey: keyof FormData; label?: string };
type ArgsForTextField = {
  type: "textField";
} & CommonCreateInputArgs &
  Omit<TextFieldProps, "formDataKey" | "label">;
type ArgsForRadioGroup = {
  type: "radioGroup";
  id?: string;
} & CommonCreateInputArgs &
  Omit<RadioGroupProps, "formDataKey" | "label" | "id">;
type CreateInputArgs = ArgsForTextField | ArgsForRadioGroup;

const isTextField = (v: CreateInputArgs): v is ArgsForTextField =>
  v.type === "textField";
const isRadioGroup = (v: CreateInputArgs): v is ArgsForRadioGroup =>
  v.type === "radioGroup";

const createInput = (args: ArgsForTextField | ArgsForRadioGroup) => {
  if (isTextField(args)) {
    const { type: _, formDataKey, label, ...rest } = args;
    return (
      <TextField
        formDataKey={formDataKey}
        label={label ? label : FormDataLabels[formDataKey]}
        {...rest}
      />
    );
  }

  if (isRadioGroup(args)) {
    const { type: _, formDataKey, label, id, ...rest } = args;
    return (
      <RadioGroup
        formDataKey={formDataKey}
        label={label ? label : FormDataLabels[formDataKey]}
        id={id ? id : formDataKey}
        {...rest}
      />
    );
  }
  return <></>;
};

const createInputComponentArgs = (isMobile: boolean): CreateInputArgs[] => [
  { type: "textField", formDataKey: "hubspotId" },
  { type: "textField", formDataKey: "otsunagiManager" },
  { type: "textField", formDataKey: "otsunagiMailAddress" },
  { type: "textField", formDataKey: "otsunagiManagerTelNumber" },
  {
    type: "radioGroup",
    formDataKey: "otsunagiManagerRole",
    choices: MANAGER_ROLES.map((v) => ({
      label: MANAGER_ROLE_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "contactMethodWithOtsunagiManager",
    choices: CONTACT_METHODS.map((v) => ({ label: v, value: v })),
    direction: isMobile ? "column" : "row",
  },
  { type: "textField", formDataKey: "operationStartDate" },
  { type: "textField", formDataKey: "contractEndDate" },
  {
    type: "radioGroup",
    formDataKey: "plan",
    choices: PLANS.map((v) => ({ label: PLAN_LABELS[v], value: v })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "needsInIntroduction",
    choices: NEEDS.map((v) => ({ label: NEEDS_LABELS[v], value: v })),
    direction: "column",
  },
  { type: "textField", formDataKey: "introductionBackground" },
  {
    type: "radioGroup",
    formDataKey: "valueSought",
    choices: VALUES_SOUGHT.map((v) => ({
      label: VALUES_SOUGHT_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  { type: "textField", formDataKey: "kpiMonthlyAppointments" },
  { type: "textField", formDataKey: "averageMonthlyUnitPrice" },
  { type: "textField", formDataKey: "averageNumberOfContractMonths" },
  {
    type: "radioGroup",
    formDataKey: "averageLeadTimeMonth",
    choices: AVERAGE_LEAD_TIME_MONTH.map((v) => ({
      label: AVERAGE_LEAD_TIME_MONTH_LABELS[v],
      value: v,
    })),
    direction: isMobile ? "column" : "row",
  },
  { type: "textField", formDataKey: "idealProductTarget" },
  {
    type: "radioGroup",
    formDataKey: "enableToBusinessAllianceAppointment",
    choices: STATUS.map((v) => ({ label: STATUS_LABELS[v], value: v })),
    direction: "row",
  },
  {
    type: "radioGroup",
    formDataKey: "serviceThatCannotReceiveMutualProposal",
    choices: PRODUCT_CATEGORIES.map((v) => ({
      label: PRODUCT_CATEGORIES_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "resourceStatusInThreeMonth",
    choices: RESOURCE_STATUS.map((v) => ({ label: v, value: v })),
    direction: "row",
  },
  { type: "textField", formDataKey: "frontManager" },
  {
    type: "radioGroup",
    formDataKey: "employeeSize",
    choices: EMPLOYEE_SIZES.map((v) => ({
      label: EMPLOYEE_SIZES_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "industry",
    choices: INDUSTRIES.map((v) => ({ label: INDUSTRIES_LABELS[v], value: v })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "productCategory",
    choices: PRODUCT_CATEGORIES.map((v) => ({
      label: PRODUCT_CATEGORIES_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  { type: "textField", formDataKey: "serviceName" },
  { type: "textField", formDataKey: "serviceUrl" },
  { type: "textField", formDataKey: "introduction" },
];

export const Contents: VFC = () => {
  const methods = useForm<FormData>();
  const { isMobile } = useCommonHooks();
  const inputComponentArgs = createInputComponentArgs(isMobile);

  const onSubmit = (v: FormData) => console.log(v); // Temporary
  const onError = (e: any) => console.log(e); // Temporary

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          {inputComponentArgs.map((v) => (
            <Fragment key={v.formDataKey}>{createInput(v)}</Fragment>
          ))}
        </Stack>
      </form>
    </FormProvider>
  );
};

export const Form: VFC = () => {
  return <Contents />;
};
