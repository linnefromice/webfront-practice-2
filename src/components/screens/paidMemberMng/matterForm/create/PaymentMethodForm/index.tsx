import { Button, Stack, Typography } from "@mui/material";
import { VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormData } from "./types";

type ContentsType = {
  onSubmit: (date: FormData) => void;
  onError?: (errors: any) => void;
  backPage: () => void;
};
export const Contents: VFC<ContentsType> = ({
  onSubmit,
  onError,
  backPage,
}) => {
  const methods = useForm<FormData>();
  const { formState } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          <Typography>支払方法入力フォーム</Typography>
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

export const PaymentMethodForm: VFC<Omit<ContentsType, "onError">> = (
  props
) => {
  const onError = (errors: any) => {
    console.log(`execute: onError`);
    console.log(errors);
  };

  return <Contents onError={onError} {...props} />;
};
