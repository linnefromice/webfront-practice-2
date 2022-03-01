import {
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { VFC } from "react";
import { useController, useFormContext } from "react-hook-form";

const FormedTextField: VFC<MuiTextFieldProps & { formDataKey: string }> = ({
  formDataKey,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field: { ref, ...rest },
  } = useController({ name: formDataKey, control });

  return <MuiTextField inputRef={ref} {...rest} {...props} />;
};

type TextFieldProps = {
  formDataKey: string;
  label: string;
  placeholder?: string;
  helperText?: string;
};

export const TextField: VFC<TextFieldProps> = (props) => (
  <FormedTextField InputLabelProps={{ shrink: true }} {...props} />
);

export const AmountField: VFC<TextFieldProps> = (props) => (
  <FormedTextField
    InputLabelProps={{ shrink: true }}
    InputProps={{
      startAdornment: <InputAdornment position="start">¥</InputAdornment>,
    }}
    {...props}
  />
);
