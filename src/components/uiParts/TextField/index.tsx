import {
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  Typography,
} from "@mui/material";
import { VFC } from "react";
import {
  RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";

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
  rules?: RegisterOptions;
  label: string;
  amount?: boolean;
  placeholder?: string;
  caption?: string;
  fullWidth?: boolean;
};

export const TextField: VFC<TextFieldProps> = ({
  formDataKey,
  rules,
  caption,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field: { ref, ...rest },
    fieldState: { invalid, error },
  } = useController({ name: formDataKey, control, rules });

  return (
    <>
      <RawTextField
        inputRef={ref}
        error={invalid}
        helperText={error ? error.message : undefined}
        {...rest}
        {...props}
      />
      {caption && (
        <Typography color="gray" variant="caption" display="block">
          {caption}
        </Typography>
      )}
    </>
  );
};
