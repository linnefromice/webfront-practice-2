import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Stack, Typography } from "@mui/material";
import { VFC } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";

export type DropzoneProps = Pick<DropzoneOptions, "onDrop" | "accept">;

export const Dropzone: VFC<DropzoneProps> = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, open } =
    useDropzone({
      accept,
      onDrop,
      maxFiles: 1,
    });

  const dropZoneBorderColor = isDragActive
    ? isDragAccept
      ? "primary.main"
      : "error.main"
    : "grey.500";

  return (
    <Stack
      {...getRootProps()}
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "150px",
        border: "dashed 2px",
        borderColor: dropZoneBorderColor,
      }}
    >
      <input {...getInputProps()} />
      <Stack alignItems="center">
        <FileUploadIcon />
        <Typography sx={{ fontSize: 12 }}>
          作成したファイルをここにドロップ
        </Typography>
        <Typography sx={{ fontSize: 12 }}>or</Typography>
        <Typography sx={{ fontSize: 12 }}>ファイルを選択</Typography>
      </Stack>
    </Stack>
  );
};
