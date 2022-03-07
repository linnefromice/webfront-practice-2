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

export const NoFormTextField: VFC<
  MuiTextFieldProps & { amount?: boolean; caption?: string }
> = ({ amount, caption, ...props }) => (
  <>
    <MuiTextField
      InputLabelProps={{ shrink: true }}
      InputProps={
        amount
          ? {
              startAdornment: (
                <InputAdornment position="start">¥</InputAdornment>
              ),
            }
          : {}
      }
      {...props}
    />
    {caption && (
      <Typography color="gray" variant="caption" display="block">
        {caption}
      </Typography>
    )}
  </>
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
  label,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field: { ref, ...rest },
    fieldState: { invalid, error },
  } = useController({ name: formDataKey, control, rules });

  return (
    <NoFormTextField
      inputRef={ref}
      error={invalid}
      helperText={error ? error.message : undefined}
      label={
        rules?.required ? (
          <>
            {`${label} `}
            <Typography color="error" sx={{ display: "inline" }}>
              *
            </Typography>
          </>
        ) : (
          label
        )
      }
      // required={rules?.required ? true : false} // TODO: not use mui required validation
      {...rest}
      {...props}
    />
  );
};
