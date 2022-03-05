import { Button, Radio, Stack, Theme, useMediaQuery } from "@mui/material";
import { VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RadioGroup } from "../../../../../uiParts/RadioGroup";
import { SelectContractKeyType, SelectContractType } from "./../types";
import { FormData } from "./types";

type ContentsType = {
  onSubmit: (data: FormData) => void;
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

  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
        <Stack spacing={2}>
          <RadioGroup
            formDataKey="selectContractType"
            rules={{ required: "入力必須パラメータです" }}
            label="新規案件種別"
            id="paid-member-mng-matter-form-select-contract-type"
            choices={(
              Object.keys(SelectContractType) as SelectContractKeyType[]
            ).map((key) => ({
              label: SelectContractType[key],
              value: key,
            }))}
            component={<Radio />}
            direction={isMobile ? "column" : "row"}
          />
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
          {process.env.NODE_ENV === "development" && formState.isSubmitted && (
            <div>
              <h3>FOR DEBUG: RESULT</h3>
              <p>{`isValid: ${formState.isValid}`}</p>
              <h6>values</h6>
              <p>{JSON.stringify(methods.getValues())}</p>
              <h6>errors</h6>
              <p>{JSON.stringify(formState.errors)}</p>
            </div>
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
