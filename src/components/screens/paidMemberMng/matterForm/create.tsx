import { DatePicker } from "@mui/lab";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Head from "next/head";
import { useState, VFC } from "react";
import { Dropzone } from "../../../organisms/Dropzone";

const Contents: VFC = () => {
  const isMobile = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );
  const [date, setDate] = useState<Date | null>(null);

  return (
    <Stack spacing={2}>
      <TextField
        InputLabelProps={{ shrink: true }}
        label="今回受注企業を紹介くださった企業"
        helperText="※ 既存チラCEOユーザーのご紹介の新規契約の場合"
      />
      <DatePicker
        label="契約日"
        inputFormat="yyyy/MM/dd"
        value={date}
        onChange={(value) => setDate(value)}
        renderInput={(params) => (
          <TextField
            InputLabelProps={{ shrink: true }}
            helperText="申込書の日付を書くようお願いします"
            {...params}
          />
        )}
      />
      <FormControl>
        <FormLabel
          id="paid-member-mng-matter-form-contract-type-label"
          sx={{ fontSize: 12 }}
        >
          契約種別
        </FormLabel>
        {isMobile ? (
          <RadioGroup aria-labelledby="paid-member-mng-matter-form-contract-type-label">
            <FormControlLabel label="新規" value="NEW" control={<Radio />} />
            <FormControlLabel
              label="更新"
              value="RENEWAL"
              control={<Radio />}
            />
            <FormControlLabel
              label="内容更新"
              value="CONTENT_RENEWAL"
              control={<Radio />}
            />
            <FormControlLabel
              label="解約"
              value="CANCELLATION"
              control={<Radio />}
            />
          </RadioGroup>
        ) : (
          <RadioGroup aria-labelledby="paid-member-mng-matter-form-contract-type-label">
            <Stack direction="row" justifyContent="flex-start">
              <FormControlLabel label="新規" value="NEW" control={<Radio />} />
              <FormControlLabel
                label="更新"
                value="RENEWAL"
                control={<Radio />}
              />
              <FormControlLabel
                label="内容更新"
                value="CONTENT_RENEWAL"
                control={<Radio />}
              />
              <FormControlLabel
                label="解約"
                value="CANCELLATION"
                control={<Radio />}
              />
            </Stack>
          </RadioGroup>
        )}
      </FormControl>
      <TextField InputLabelProps={{ shrink: true }} label="契約獲得者" />
      <Typography variant="h5">データ共有</Typography>
      <Typography sx={{ fontSize: 12 }}>申込書PDFデータ</Typography>
      <Dropzone onDrop={() => {}} accept={"*"} />
      <Typography sx={{ fontSize: 12 }}>名刺写真</Typography>
      <Dropzone onDrop={() => {}} accept={"*"} />
      <Typography sx={{ fontSize: 12 }}>クロージング現場の音源</Typography>
      <TextField InputLabelProps={{ shrink: true }} label="音源ラベル" />
      <TextField InputLabelProps={{ shrink: true }} label="音源URL" />
      <Typography sx={{ fontSize: 12 }}>クロージングで出した資料</Typography>
      <Dropzone onDrop={() => {}} accept={"*"} />
      <TextField
        InputLabelProps={{ shrink: true }}
        label="初回請求額"
        InputProps={{
          startAdornment: <InputAdornment position="start">¥</InputAdornment>,
        }}
      />
      <Typography sx={{ fontSize: 12 }}>初回請求額内訳</Typography>
      <TextField InputLabelProps={{ shrink: true }} label="ラベル" />
      <TextField
        InputLabelProps={{ shrink: true }}
        label="金額"
        InputProps={{
          startAdornment: <InputAdornment position="start">¥</InputAdornment>,
        }}
      />
      <TextField InputLabelProps={{ shrink: true }} label="ラベル" />
      <TextField
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
