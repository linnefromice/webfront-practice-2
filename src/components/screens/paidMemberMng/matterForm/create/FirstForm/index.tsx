import { Grid, Stack, Typography } from "@mui/material";
import { Dropzone } from "components/organisms/Dropzone";
import { Button, RadioGroup, TextField } from "components/uiParts";
import { DATE_PATTERN, useCommonHooks } from "libs/utils";
import { Fragment, VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  ContractType,
  ContractTypeKeyType,
  FormData,
  FormDataLabels,
} from "./types";

const InitialBillingBreakdowns: VFC = () => {
  const array = [...new Array(3)]; // dummy

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography sx={{ fontSize: 12 }}>
          {FormDataLabels["initialBillingBreakdowns"]}
        </Typography>
        <Button variant="contained" color="primary" sx={{ height: "50%" }}>
          行追加
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {array.map((_, i) => (
          <Fragment key={`initialBillingBreakdowns.${i}`}>
            <Grid item sm={12} md={3}>
              <TextField
                formDataKey={`initialBillingBreakdowns.${i}.description`}
                label="ラベル"
                fullWidth
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                formDataKey={`initialBillingBreakdowns.${i}.amount`}
                label="金額"
                amount
                fullWidth
              />
            </Grid>
            <Grid item sm={12} md={3}>
              <Button variant="contained" color="text" sx={{ height: "100%" }}>
                行削除
              </Button>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

type ContentsType = {
  defaultValues?: FormData;
  onSubmit: (data: FormData) => void;
  onError?: (errors: any) => void;
};
export const Contents: VFC<ContentsType> = ({
  defaultValues,
  onSubmit,
  onError,
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
          <TextField
            formDataKey="introducer"
            label={FormDataLabels["introducer"]}
            caption="※ 既存チラCEOユーザーのご紹介の新規契約の場合"
          />
          <TextField
            formDataKey="contractDate"
            rules={{
              required: "入力必須パラメータです",
              pattern: DATE_PATTERN,
            }}
            label={FormDataLabels["contractDate"]}
            placeholder="yyyyMMdd"
            caption="申込書の日付を書くようお願いします"
          />
          <RadioGroup
            formDataKey="contractType"
            rules={{ required: "入力必須パラメータです" }}
            label={FormDataLabels["contractType"]}
            id="paid-member-mng-matter-form-contract-type-label"
            choices={(Object.keys(ContractType) as ContractTypeKeyType[]).map(
              (v) => ({ label: ContractType[v], value: v })
            )}
            direction={isMobile ? "column" : "row"}
          />
          <TextField
            formDataKey="contractor"
            rules={{ required: "入力必須パラメータです" }}
            label={FormDataLabels["contractor"]}
          />
          <Typography variant="h5">データ共有</Typography>
          <Dropzone
            formDataKey="applicationFormData"
            label={FormDataLabels["applicationFormData"]}
            accept={["application/pdf"]}
          />
          <Dropzone
            formDataKey="businessCardPic"
            label={FormDataLabels["businessCardPic"]}
            accept={["image/jpeg", "image/png"]}
          />
          <Typography sx={{ fontSize: 12 }}>クロージング現場の音源</Typography>
          <TextField
            formDataKey="closingUrl"
            label={FormDataLabels["closingUrl"]}
          />
          <TextField
            formDataKey="closingUrlDescription"
            label={FormDataLabels["closingUrlDescription"]}
          />
          <Dropzone
            formDataKey="closingDocument"
            label={FormDataLabels["closingDocument"]}
          />
          <TextField
            formDataKey="initialBillingAmount"
            amount
            label={FormDataLabels["initialBillingAmount"]}
          />
          <InitialBillingBreakdowns />
          <Button
            type="submit"
            variant="contained"
            disabled={!formState.isValid && formState.submitCount > 0}
          >
            次ページに遷移
          </Button>
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

export const FirstForm: VFC<Omit<ContentsType, "onError">> = (props) => {
  const onError = (errors: any) => {
    console.log(`execute: onError`);
    console.log(errors);
  };

  return <Contents onError={onError} {...props} />;
};
