import { DatePicker } from "@mui/lab";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup as MuiRadioGroup,
  Stack,
  TextField as MuiTextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Head from "next/head";
import { useState, VFC } from "react";
import {
  Dropzone as BaseDropzone,
  DropzoneProps,
} from "../../../organisms/Dropzone";

const TextField: VFC<{ label: string; helperText?: string }> = ({
  label,
  helperText,
}) => {
  return (
    <MuiTextField
      InputLabelProps={{ shrink: true }}
      label={label}
      helperText={helperText}
    />
  );
};

type RadioGroupType = {
  label: string;
  id: string;
  choices: { label: string; value: string }[];
  component: JSX.Element;
  direction: "column" | "row";
};
const RadioGroup: VFC<RadioGroupType> = ({
  label,
  id,
  choices,
  component,
  direction,
}) => {
  return (
    <FormControl>
      <FormLabel id={id} sx={{ fontSize: 12 }}>
        {label}
      </FormLabel>
      {direction === "column" ? (
        <MuiRadioGroup aria-labelledby={id}>
          {choices.map((v) => (
            <FormControlLabel
              key={`${id}.${v.label}`}
              label={v.label}
              value={v.label}
              control={component}
            />
          ))}
        </MuiRadioGroup>
      ) : (
        <MuiRadioGroup aria-labelledby={id}>
          <Stack direction="row" justifyContent="flex-start">
            {choices.map((v) => (
              <FormControlLabel
                key={`${id}.${v.label}`}
                label={v.label}
                value={v.label}
                control={component}
              />
            ))}
          </Stack>
        </MuiRadioGroup>
      )}
    </FormControl>
  );
};

const Dropzone: VFC<{ label: string } & DropzoneProps> = ({
  label,
  onDrop,
  accept,
}) => {
  return (
    <>
      <Typography sx={{ fontSize: 12 }}>{label}</Typography>
      <BaseDropzone onDrop={onDrop} accept={accept} />
    </>
  );
};

const Contents: VFC = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const [date, setDate] = useState<Date | null>(null);

  return (
    <Stack spacing={2}>
      <TextField
        label="今回受注企業を紹介くださった企業"
        helperText="※ 既存チラCEOユーザーのご紹介の新規契約の場合"
      />
      <DatePicker
        label="契約日"
        inputFormat="yyyy/MM/dd"
        value={date}
        onChange={(value) => setDate(value)}
        renderInput={(params) => (
          <MuiTextField
            InputLabelProps={{ shrink: true }}
            helperText="申込書の日付を書くようお願いします"
            {...params}
          />
        )}
      />
      <RadioGroup
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
      <TextField label="契約獲得者" />
      <Typography variant="h5">データ共有</Typography>
      <Dropzone label="申込書PDFデータ" onDrop={() => {}} accept={"*"} />
      <Dropzone label="名刺写真" onDrop={() => {}} accept={"*"} />
      <Typography sx={{ fontSize: 12 }}>クロージング現場の音源</Typography>
      <TextField label="音源ラベル" />
      <TextField label="音源URL" />
      <Dropzone
        label="クロージングで出した資料"
        onDrop={() => {}}
        accept={"*"}
      />
      <MuiTextField
        InputLabelProps={{ shrink: true }}
        label="初回請求額"
        InputProps={{
          startAdornment: <InputAdornment position="start">¥</InputAdornment>,
        }}
      />
      <Typography sx={{ fontSize: 12 }}>初回請求額内訳</Typography>
      <MuiTextField InputLabelProps={{ shrink: true }} label="ラベル" />
      <MuiTextField
        InputLabelProps={{ shrink: true }}
        label="金額"
        InputProps={{
          startAdornment: <InputAdornment position="start">¥</InputAdornment>,
        }}
      />
      <MuiTextField InputLabelProps={{ shrink: true }} label="ラベル" />
      <MuiTextField
        InputLabelProps={{ shrink: true }}
        label="金額"
        InputProps={{
          startAdornment: <InputAdornment position="start">¥</InputAdornment>,
        }}
      />
      <Button variant="contained">次ページに遷移</Button>
    </Stack>
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
