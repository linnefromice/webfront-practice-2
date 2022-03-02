import {
  Button,
  Grid,
  Radio,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Head from "next/head";
import { Fragment, VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Dropzone as BaseDropzone,
  DropzoneProps,
} from "../../../organisms/Dropzone";
import { RadioGroup } from "../../../uiParts/RadioGroup";
import { TextField } from "../../../uiParts/TextField";

type InitialBillingBreakdownData = {
  amount: number;
  description: string;
};

type FormData = {
  introducer: string; // 受注企業を紹介した企業
  contractDate: string; // 契約日
  contractType: string; // 契約種別
  contractor: string; // 契約獲得者
  applicationFormData: File[]; // 申込書PDFデータ
  businessCardPic: File[]; // 名刺写真
  closingUrl: string; // クロージング現場の音源URL
  closingUrlDescription: string; // クロージング現場の音源説明
  closingDocument: File[]; // クロージング資料
  initialBillingAmount: string; // 初回請求額
  initialBillingBreakdowns: InitialBillingBreakdownData[]; // 初回請求内訳
};

const Dropzone: VFC<{ label: string } & DropzoneProps> = ({
  label,
  formDataKey,
  accept,
}) => {
  return (
    <>
      <Typography sx={{ fontSize: 12 }}>{label}</Typography>
      <BaseDropzone formDataKey={formDataKey} accept={accept} />
    </>
  );
};

const InitialBillingBreakdowns: VFC = () => {
  const array = [...new Array(3)]; // dummy

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography sx={{ fontSize: 12 }}>初回請求額内訳</Typography>
        <Button variant="contained" sx={{ height: "50%" }}>
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
              <Button
                variant="contained"
                color="warning"
                sx={{ height: "100%" }}
              >
                行削除
              </Button>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

const Contents: VFC = () => {
  const methods = useForm<FormData>();

  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
              pattern: {
                value: /[0-9]{8}/,
                message: "yyyyMMdd の形式で日付を入力してください",
              },
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
            component={<Radio />}
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
            rules={{ required: "入力必須パラメータです" }}
            amount
            label="初回請求額"
          />
          <InitialBillingBreakdowns />
          <Button type="submit" variant="contained">
            次ページに遷移
          </Button>
          {process.env.NODE_ENV === "development" &&
            methods.formState.isSubmitted && (
              <div>
                <h3>FOR DEBUG: RESULT</h3>
                <p>{`isValid: ${methods.formState.isValid}`}</p>
                <h6>values</h6>
                <p>{JSON.stringify(methods.getValues())}</p>
                <h6>errors</h6>
                <p>{JSON.stringify(methods.formState.errors)}</p>
              </div>
            )}
        </Stack>
      </form>
    </FormProvider>
  );
};

export const CreateScreen: VFC = () => {
  return (
    <>
      <Head>
        <title>案件情報フォーム</title>
      </Head>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        案件情報フォーム
      </Typography>
      <Contents />
    </>
  );
};
