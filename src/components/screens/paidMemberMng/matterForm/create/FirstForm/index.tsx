import { Grid, Stack, Typography } from "@mui/material";
import { Dropzone } from "components/organisms/Dropzone";
import { Button, RadioGroup, TextField } from "components/uiParts";
import { DATE_PATTERN, useCommonHooks } from "libs/utils";
import { Fragment, VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormData } from "./types";

const InitialBillingBreakdowns: VFC = () => {
  const array = [...new Array(3)]; // dummy

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography sx={{ fontSize: 12 }}>初回請求額内訳</Typography>
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
            label="今回受注企業を紹介くださった企業"
            caption="※ 既存チラCEOユーザーのご紹介の新規契約の場合"
          />
          <TextField
            formDataKey="contractDate"
            rules={{
              required: "入力必須パラメータです",
              pattern: DATE_PATTERN,
            }}
            label="契約日"
            placeholder="yyyyMMdd"
            caption="申込書の日付を書くようお願いします"
          />
          <RadioGroup
            formDataKey="contractType"
            rules={{ required: "入力必須パラメータです" }}
            label="契約種別"
            id="paid-member-mng-matter-form-contract-type-label"
            choices={[
              { label: "新規", value: "NEW" },
              { label: "更新", value: "RENEWAL" },
              { label: "内容更新", value: "CONTENT_RENEWAL" },
              { label: "解約", value: "CANCELLATION" },
            ]}
            direction={isMobile ? "column" : "row"}
          />
          <TextField
            formDataKey="contractor"
            rules={{ required: "入力必須パラメータです" }}
            label="契約獲得者"
          />
          <Typography variant="h5">データ共有</Typography>
          <Dropzone
            formDataKey="applicationFormData"
            label="申込書PDFデータ"
            accept={["application/pdf"]}
          />
          <Dropzone
            formDataKey="businessCardPic"
            label="名刺写真"
            accept={["image/jpeg", "image/png"]}
          />
          <Typography sx={{ fontSize: 12 }}>クロージング現場の音源</Typography>
          <TextField formDataKey="closingUrl" label="音源ラベル" />
          <TextField formDataKey="closingUrlDescription" label="音源URL" />
          <Dropzone
            formDataKey="closingDocument"
            label="クロージングで出した資料"
          />
          <TextField
            formDataKey="initialBillingAmount"
            amount
            label="初回請求額"
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
