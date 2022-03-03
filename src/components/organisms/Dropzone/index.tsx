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
    <>
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
    </>
  );
};

export type WrappedRawDropzoneProps = Pick<
  RawDropzoneProps,
  "onDrop" | "accept"
> & {
  label?: string;
  required?: boolean; // TODO: implement (judge to count 1 or more?, in some cases use FieldArray)
  errorMessage?: string;
  caption?: string;
};

export const WrappedRawDropzone: VFC<WrappedRawDropzoneProps> = ({
  label,
  required,
  errorMessage,
  caption,
  ...props
}) => {
  return (
    <>
      {label && (
        <>
          <Typography
            color={errorMessage ? "error" : "default"}
            sx={{ fontSize: 12, display: "inline" }}
          >
            {label}
            {required && (
              <Typography
                color="error"
                sx={{ fontSize: 12, display: "inline" }}
              >
                *
              </Typography>
            )}
          </Typography>
        </>
      )}
      <RawDropzone {...props} />
      {errorMessage && (
        <Typography color="error" variant="caption" display="block">
          {errorMessage}
        </Typography>
      )}
      {caption && (
        <Typography color="gray" variant="caption" display="block">
          {caption}
        </Typography>
      )}
    </>
  );
};

export type DropzoneProps = WrappedRawDropzoneProps & {
  formDataKey: string;
};

export const Dropzone: VFC<DropzoneProps> = ({ formDataKey, ...props }) => {
  const { register, unregister, setValue, getFieldState, watch } =
    useFormContext();
  const files = watch(formDataKey);
  const { error } = getFieldState(formDataKey);

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

  return (
    <WrappedRawDropzone
      {...props}
      onDrop={onDrop}
      errorMessage={error ? error.message : undefined}
    />
  );
};
