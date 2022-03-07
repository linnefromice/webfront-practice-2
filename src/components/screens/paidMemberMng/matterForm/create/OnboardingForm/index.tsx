import { Stack, Typography } from "@mui/material";
import { Button, TextField } from "components/uiParts";
import { ONLY_NUMBER_PATTERN } from "libs/utils";
import { VFC } from "react";
import { FormProvider, RegisterOptions, useForm } from "react-hook-form";
import { FormData, FormDataLabels } from "./types";

const formItems: {
  formDataKey: keyof FormData;
  rules?: RegisterOptions;
  label: string;
}[] = [
  {
    formDataKey: "firstConsultationStartTime",
    rules: { pattern: ONLY_NUMBER_PATTERN },
    label: FormDataLabels["firstConsultationStartTime"],
  },
  {
    formDataKey: "firstConsultantMain",
    label: FormDataLabels["firstConsultantMain"],
  },
  {
    formDataKey: "firstConsultantSub",
    label: FormDataLabels["firstConsultantSub"],
  },
  { formDataKey: "kickoffLocation", label: FormDataLabels["kickoffLocation"] },
  {
    formDataKey: "specialMattersColumn",
    label: FormDataLabels["specialMattersColumn"],
  },
  {
    formDataKey: "howToUseIntrinsicValue",
    label: FormDataLabels["howToUseIntrinsicValue"],
  },
  {
    formDataKey: "intrinsicValueKpi",
    label: FormDataLabels["intrinsicValueKpi"],
  },
  {
    formDataKey: "howToUseCurrentValue",
    label: FormDataLabels["howToUseCurrentValue"],
  },
  { formDataKey: "currentValueKpi", label: FormDataLabels["currentValueKpi"] },
  { formDataKey: "serviceContents", label: FormDataLabels["serviceContents"] },
  {
    formDataKey: "serviceMaterials",
    label: FormDataLabels["serviceMaterials"],
  },
  {
    formDataKey: "otherSharedMattersForKickoffStaff",
    label: FormDataLabels["otherSharedMattersForKickoffStaff"],
  },
];

type ContentsType = {
  defaultValues?: FormData;
  onSubmit: (date: FormData) => void;
  onError?: (errors: any) => void;
  backPage: () => void;
};
export const Contents: VFC<ContentsType> = ({
  defaultValues,
  onSubmit,
  onError,
  backPage,
}) => {
  const methods = useForm<FormData>({
    defaultValues: defaultValues,
  });
  const { formState } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            オンボーディング情報
          </Typography>
          {formItems.map((v) => (
            <TextField
              key={`OnboardingForm.${v.formDataKey}`}
              formDataKey={v.formDataKey}
              rules={v.rules}
              label={v.label}
            />
          ))}
          <Stack direction="row" columnGap={2}>
            <Button
              variant="outlined"
              color="text"
              fullWidth
              onClick={backPage}
            >
              前ページに戻る
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!formState.isValid && formState.submitCount > 0}
            >
              次ページに遷移
            </Button>
          </Stack>
        </Stack>
      </form>
    </FormProvider>
  );
};

export const OnboardingForm: VFC<Omit<ContentsType, "onError">> = (props) => {
  const onError = (errors: any) => {
    console.log(`execute: onError`);
    console.log(errors);
  };

  return <Contents onError={onError} {...props} />;
};
