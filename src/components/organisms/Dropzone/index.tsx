import { Stack } from "@mui/material";
import { VFC } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";

type DropzoneProps = Pick<DropzoneOptions, "onDrop" | "accept">;

export const Dropzone: VFC<DropzoneProps> = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, open } =
    useDropzone({
      accept,
      onDrop,
      noClick: true,
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
        minHeight: "300px",
        border: "dashed 2px",
        borderColor: dropZoneBorderColor,
      }}
    >
      <input {...getInputProps()} />
    </Stack>
  );
};
