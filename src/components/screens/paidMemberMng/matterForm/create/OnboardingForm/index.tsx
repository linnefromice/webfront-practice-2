import { Button, Stack, Typography } from "@mui/material";
import { VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormData } from "./types";

type ContentsType = {
  onSubmit: (date: FormData) => void;
  onError?: (errors: any) => void;
};
export const Contents: VFC<ContentsType> = ({ onSubmit, onError }) => {
  const methods = useForm<FormData>();
  const { formState } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          <Typography>オンボーディング情報</Typography>
          <Button
            type="submit"
            variant="contained"
            disabled={!formState.isValid && formState.submitCount > 0}
          >
            次ページに遷移
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export const OnboardingForm: VFC<{
  onSubmit: (data: FormData) => void;
}> = ({ onSubmit }) => {
  const onError = (errors: any) => {
    console.log(`execute: onError`);
    console.log(errors);
  };

  return <Contents onSubmit={onSubmit} onError={onError} />;
};
