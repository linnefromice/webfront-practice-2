import {
  Button,
  InputAdornment,
  Radio,
  Stack,
  TextField as MuiTextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Head from "next/head";
import { VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Dropzone as BaseDropzone,
  DropzoneProps,
} from "../../../organisms/Dropzone";
import { RadioGroup } from "../../../uiParts/RadioGroup";
import { TextField } from "../../../uiParts/TextField";

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
            helperText="※ 既存チラCEOユーザーのご紹介の新規契約の場合"
          />
          <TextField
            formDataKey="contractDate"
            label="契約日"
            placeholder="yyyyMMdd"
            helperText="申込書の日付を書くようお願いします"
          />
          <RadioGroup
            formDataKey="contractType"
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
          <TextField formDataKey="contractor" label="契約獲得者" />
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
          <MuiTextField
            InputLabelProps={{ shrink: true }}
            label="初回請求額"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">¥</InputAdornment>
              ),
            }}
          />
          <Typography sx={{ fontSize: 12 }}>初回請求額内訳</Typography>
          <MuiTextField InputLabelProps={{ shrink: true }} label="ラベル" />
          <MuiTextField
            InputLabelProps={{ shrink: true }}
            label="金額"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">¥</InputAdornment>
              ),
            }}
          />
          <MuiTextField InputLabelProps={{ shrink: true }} label="ラベル" />
          <MuiTextField
            InputLabelProps={{ shrink: true }}
            label="金額"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">¥</InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained">
            次ページに遷移
          </Button>
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
