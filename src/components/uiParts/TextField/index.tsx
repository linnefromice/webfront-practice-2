import { TextField as MuiTextField } from "@mui/material";
import { VFC } from "react";
import { useController, useFormContext } from "react-hook-form";

export const TextField: VFC<{
  formDataKey: string;
  label: string;
  helperText?: string;
}> = ({ formDataKey, label, helperText }) => {
  const { control } = useFormContext();
  const {
    field: { ref, ...rest },
  } = useController({ name: formDataKey, control });

  return (
    <MuiTextField
      inputRef={ref}
      {...rest}
      InputLabelProps={{ shrink: true }}
      label={label}
      helperText={helperText}
    />
  );
};
