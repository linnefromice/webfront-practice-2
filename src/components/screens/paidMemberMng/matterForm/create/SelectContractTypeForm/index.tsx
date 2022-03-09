import { Stack } from "@mui/material";
import { Button, RadioGroup } from "components/uiParts";
import { useCommonHooks } from "libs/utils";
import { VFC } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { SelectContractKeyType, SelectContractType } from "./../types";
import { FormData, FormDataLabels } from "./types";

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
          setValue("selectContractType", "ChiraCeo");
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

type ContentsType = {
  defaultValues?: FormData;
  onSubmit: (data: FormData) => void;
  onError?: (errors: any) => void;
  backPage: () => void;
};
export const Contents: VFC<ContentsType> = ({
  defaultValues,
  onSubmit,
  onError,
  backPage,
}) => {
  const { isMobile } = useCommonHooks();
  const methods = useForm<FormData>({
    defaultValues: defaultValues,
  });
  const { formState } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          <RadioGroup
            formDataKey="selectContractType"
            rules={{ required: "入力必須パラメータです" }}
            label={FormDataLabels["selectContractType"]}
            id="paid-member-mng-matter-form-select-contract-type"
            choices={(
              Object.keys(SelectContractType) as SelectContractKeyType[]
            ).map((key) => ({
              label: SelectContractType[key],
              value: key,
            }))}
            direction={isMobile ? "column" : "row"}
          />
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
          {process.env.NODE_ENV === "development" && (
            <DebugComponent methods={methods} />
          )}
        </Stack>
      </form>
    </FormProvider>
  );
};

export const SelectContractTypeForm: VFC<Omit<ContentsType, "onError">> = (
  props
) => {
  const onError = (errors: any) => {
    console.log(`execute: onError`);
    console.log(errors);
  };

  return <Contents onError={onError} {...props} />;
};
