import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Stack, Typography } from "@mui/material";
import { useCallback, useEffect, VFC } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

export type RawDropzoneProps = Pick<DropzoneOptions, "onDrop"> & {
  accept?: string | string[];
};

export const RawDropzone: VFC<RawDropzoneProps> = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
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

export type DropzoneProps = Omit<RawDropzoneProps, "onDrop"> & {
  formDataKey: string;
};

export const Dropzone: VFC<DropzoneProps> = ({ formDataKey, ...props }) => {
  const { register, unregister, setValue, watch } = useFormContext();
  const files = watch(formDataKey);

  const onDrop = useCallback(
    (droppedFiles) => {
      const newFiles =
        (!!files?.length && [...files].concat(droppedFiles)) || droppedFiles;
      setValue(formDataKey, newFiles, { shouldValidate: true });
    },
    [setValue, formDataKey]
  );

  useEffect(() => {
    register(formDataKey);
    return () => unregister(formDataKey);
  }, [register, unregister, formDataKey]);

  return <RawDropzone {...props} onDrop={onDrop} />;
};
