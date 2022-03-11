import { Stack } from "@mui/material";
import {
  Button,
  RadioGroup,
  RadioGroupProps,
  TextField,
  TextFieldProps,
} from "components/uiParts";
import {
  DATE_PATTERN,
  ONLY_NUMBER_PATTERN,
  REQUIRED_ERROR_MESSAGE,
  TEL_NUMBER_PATTERN,
  useCommonHooks,
} from "libs/utils";
import { Fragment, VFC } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
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

/** For Debug */
const DebugComponent: VFC<{ methods: UseFormReturn<FormData, any> }> = ({
  methods,
}) => {
  const { setValue, formState } = methods;
  return (
    <div>
      <h3>FOR DEBUG</h3>
      <Button
        variant="contained"
        color="text"
        sx={{ m: 0.25 }}
        onClick={() => {
          setValue("otsunagiManager", "Example おつなぎ担当者");
          setValue("otsunagiMailAddress", "Example おつなぎメールアドレス");
          setValue("otsunagiManagerTelNumber", "00-0000-0000");
          setValue("otsunagiManagerRole", "Chairman");
          setValue("contactMethodWithOtsunagiManager", "Mail");
          setValue("operationStartDate", "20000101");
          setValue("contractEndDate", "20001231");
          setValue("plan", "NewLightPlan");
          setValue("needsInIntroduction", "AppointmentCuzCannotGetByAd");
          setValue("valueSought", "EndUserAcquisition");
          setValue("kpiMonthlyAppointments", "10");
          setValue("averageMonthlyUnitPrice", "150000");
          setValue("averageNumberOfContractMonths", "3");
          setValue("averageLeadTimeMonth", "LessThanThree");
          setValue("idealProductTarget", "Example 商材ターゲット");
          setValue("enableToBusinessAllianceAppointment", "InSomeCases");
          setValue("serviceThatCannotReceiveMutualProposal", "SalesSupport");
          setValue("resourceStatusInThreeMonth", "1");
          setValue("frontManager", "Example フロント担当者");
          setValue("employeeSize", "LessThan5");
          setValue("industry", "InformationTechnology");
          setValue("productCategory", "SalesSupport");
          setValue("serviceUrl", "Example サービスURL");
          setValue("introduction", "Example 紹介文");
          methods.trigger();
        }}
      >
        {`set dummy data`}
      </Button>
      <Button
        variant="contained"
        color="text"
        sx={{ m: 0.25 }}
        onClick={() =>
          methods.reset(undefined, {
            keepErrors: true,
            keepDirty: true,
            keepIsSubmitted: true,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: true,
          })
        }
      >
        {`reset data`}
      </Button>
      <Button
        variant="contained"
        color="text"
        sx={{ m: 0.25 }}
        onClick={() => methods.trigger()}
      >
        {`trigger`}
      </Button>
      {formState.isSubmitted && (
        <>
          <p>{`isValid: ${formState.isValid}`}</p>
          <h6>values</h6>
          <p>{JSON.stringify(methods.getValues())}</p>
          <h6>errors</h6>
          <p>{JSON.stringify(formState.errors)}</p>
        </>
      )}
    </div>
  );
};

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
  {
    type: "textField",
    formDataKey: "otsunagiManager",
    rules: { required: REQUIRED_ERROR_MESSAGE },
  },
  {
    type: "textField",
    formDataKey: "otsunagiMailAddress",
    rules: { required: REQUIRED_ERROR_MESSAGE },
  },
  {
    type: "textField",
    formDataKey: "otsunagiManagerTelNumber",
    rules: { required: REQUIRED_ERROR_MESSAGE, pattern: TEL_NUMBER_PATTERN },
  },
  {
    type: "radioGroup",
    formDataKey: "otsunagiManagerRole",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: MANAGER_ROLES.map((v) => ({
      label: MANAGER_ROLE_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "contactMethodWithOtsunagiManager",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: CONTACT_METHODS.map((v) => ({ label: v, value: v })),
    direction: isMobile ? "column" : "row",
  },
  {
    type: "textField",
    formDataKey: "operationStartDate",
    rules: { required: REQUIRED_ERROR_MESSAGE, pattern: DATE_PATTERN },
  },
  {
    type: "textField",
    formDataKey: "contractEndDate",
    rules: { required: REQUIRED_ERROR_MESSAGE, pattern: DATE_PATTERN },
  },
  {
    type: "radioGroup",
    formDataKey: "plan",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: PLANS.map((v) => ({ label: PLAN_LABELS[v], value: v })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "needsInIntroduction",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: NEEDS.map((v) => ({ label: NEEDS_LABELS[v], value: v })),
    direction: "column",
  },
  { type: "textField", formDataKey: "introductionBackground" },
  {
    type: "radioGroup",
    formDataKey: "valueSought",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: VALUES_SOUGHT.map((v) => ({
      label: VALUES_SOUGHT_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  {
    type: "textField",
    formDataKey: "kpiMonthlyAppointments",
    rules: { required: REQUIRED_ERROR_MESSAGE, pattern: ONLY_NUMBER_PATTERN },
  },
  {
    type: "textField",
    formDataKey: "averageMonthlyUnitPrice",
    rules: { required: REQUIRED_ERROR_MESSAGE, pattern: ONLY_NUMBER_PATTERN },
    amount: true,
  },
  {
    type: "textField",
    formDataKey: "averageNumberOfContractMonths",
    rules: { required: REQUIRED_ERROR_MESSAGE, pattern: ONLY_NUMBER_PATTERN },
  },
  {
    type: "radioGroup",
    formDataKey: "averageLeadTimeMonth",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: AVERAGE_LEAD_TIME_MONTH.map((v) => ({
      label: AVERAGE_LEAD_TIME_MONTH_LABELS[v],
      value: v,
    })),
    direction: isMobile ? "column" : "row",
  },
  {
    type: "textField",
    formDataKey: "idealProductTarget",
    rules: { required: REQUIRED_ERROR_MESSAGE },
  },
  {
    type: "radioGroup",
    formDataKey: "enableToBusinessAllianceAppointment",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: STATUS.map((v) => ({ label: STATUS_LABELS[v], value: v })),
    direction: "row",
  },
  {
    type: "radioGroup",
    formDataKey: "serviceThatCannotReceiveMutualProposal",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: PRODUCT_CATEGORIES.map((v) => ({
      label: PRODUCT_CATEGORIES_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "resourceStatusInThreeMonth",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: RESOURCE_STATUS.map((v) => ({ label: v, value: v })),
    direction: "row",
  },
  {
    type: "textField",
    formDataKey: "frontManager",
    rules: { required: REQUIRED_ERROR_MESSAGE },
  },
  {
    type: "radioGroup",
    formDataKey: "employeeSize",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: EMPLOYEE_SIZES.map((v) => ({
      label: EMPLOYEE_SIZES_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "industry",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: INDUSTRIES.map((v) => ({ label: INDUSTRIES_LABELS[v], value: v })),
    direction: "column",
  },
  {
    type: "radioGroup",
    formDataKey: "productCategory",
    rules: { required: REQUIRED_ERROR_MESSAGE },
    choices: PRODUCT_CATEGORIES.map((v) => ({
      label: PRODUCT_CATEGORIES_LABELS[v],
      value: v,
    })),
    direction: "column",
  },
  { type: "textField", formDataKey: "serviceName" },
  {
    type: "textField",
    formDataKey: "serviceUrl",
    rules: { required: REQUIRED_ERROR_MESSAGE },
  },
  {
    type: "textField",
    formDataKey: "introduction",
    rules: { required: REQUIRED_ERROR_MESSAGE },
  },
];

export const Contents: VFC = () => {
  const methods = useForm<FormData>();
  const { formState } = methods;
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
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={!formState.isValid && formState.submitCount > 0}
          >
            確認画面へ遷移
          </Button>
        </Stack>
        {process.env.NODE_ENV === "development" && (
          <DebugComponent methods={methods} />
        )}
      </form>
    </FormProvider>
  );
};

export const Form: VFC = () => {
  return <Contents />;
};
