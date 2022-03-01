import { TextField as MuiTextField } from "@mui/material";
import { VFC } from "react";

export const TextField: VFC<{ label: string; helperText?: string }> = ({
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
