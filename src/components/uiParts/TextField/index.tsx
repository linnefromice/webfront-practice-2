import {
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { VFC } from "react";
import { useController, useFormContext } from "react-hook-form";

export const RawTextField: VFC<MuiTextFieldProps & { amount?: boolean }> = ({
  amount,
  ...props
}) => (
  <MuiTextField
    InputLabelProps={{ shrink: true }}
    InputProps={
      amount
        ? {
            startAdornment: <InputAdornment position="start">¥</InputAdornment>,
          }
        : {}
    }
    {...props}
  />
);

type TextFieldProps = {
  formDataKey: string;
  label: string;
  amount?: boolean;
  placeholder?: string;
  helperText?: string;
  fullWidth?: boolean;
};

export const TextField: VFC<TextFieldProps> = ({ formDataKey, ...props }) => {
  const { control } = useFormContext();
  const {
    field: { ref, ...rest },
  } = useController({ name: formDataKey, control });

  return <RawTextField inputRef={ref} {...rest} {...props} />;
};
