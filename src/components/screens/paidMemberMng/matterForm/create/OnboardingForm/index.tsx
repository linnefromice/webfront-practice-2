import { Button, Stack, Typography } from "@mui/material";
import { TextField } from "components/uiParts/TextField";
import { ONLY_NUMBER_PATTERN } from "libs/utils";
import { VFC } from "react";
import { FormProvider, RegisterOptions, useForm } from "react-hook-form";
import { FormData } from "./types";

const formItems: {
  formDataKey: keyof FormData;
  rules?: RegisterOptions;
  label: string;
}[] = [
  {
    formDataKey: "firstConsultationStartTime",
    rules: { pattern: ONLY_NUMBER_PATTERN },
    label: "初回コンサル開始時刻",
  },
  { formDataKey: "firstConsultantMain", label: "初回コンサル担当(メイン)" },
  { formDataKey: "firstConsultantSub", label: "初回コンサル担当(サブ)" },
  { formDataKey: "kickoffLocation", label: "キックオフ実施場所" },
  { formDataKey: "specialMattersColumn", label: "特別事項欄" },
  { formDataKey: "howToUseIntrinsicValue", label: "本質的価値の利用方法" },
  { formDataKey: "intrinsicValueKpi", label: "本質的価値のAPI" },
  { formDataKey: "howToUseCurrentValue", label: "現在的価値の利用方法" },
  { formDataKey: "currentValueKpi", label: "現在的価値のAPI" },
  { formDataKey: "serviceContents", label: "サービス内容" },
  { formDataKey: "serviceMaterials", label: "サービス資料" },
  {
    formDataKey: "otherSharedMattersForKickoffStaff",
    label: "その他キックオフ担当向け共有事項",
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
              variant="contained"
              color="secondary"
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
