import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio as MuiRadio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import { VFC } from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

type NoFormRadioGroupType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  id: string;
  label: string;
  choices: { label: string; value: string }[];
  component: JSX.Element;
  direction: "column" | "row";
  required?: boolean;
  caption?: string;
  error?: boolean;
  errorMessage?: string;
};

export const NoFormRadioGroup: VFC<NoFormRadioGroupType> = ({
  value,
  onChange,
  id,
  label,
  choices,
  component,
  direction,
  required,
  caption,
  error,
  errorMessage,
}) => {
  return (
    <FormControl error={error}>
      <FormLabel id={id} sx={{ fontSize: 12 }} required={required}>
        {label}
      </FormLabel>
      <MuiRadioGroup
        aria-labelledby={id}
        value={value}
        onChange={onChange}
        row={direction === "row"}
      >
        {choices.map((v) => (
          <FormControlLabel
            key={`${id}.${v.label}`}
            label={v.label}
            value={v.value}
            checked={v.value === value}
            control={component}
          />
        ))}
      </MuiRadioGroup>
      {error && errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      {caption && <FormHelperText error={false}>{caption}</FormHelperText>}
    </FormControl>
  );
};

export type RadioGroupProps = Omit<
  NoFormRadioGroupType,
  "component" | "value" | "onChange" | "required"
> & {
  formDataKey: string;
  rules?: RegisterOptions;
  component?: JSX.Element;
};
export const RadioGroup: VFC<RadioGroupProps> = ({
  formDataKey,
  rules,
  component,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={formDataKey}
      rules={rules}
      render={({
        field: { value, onChange },
        fieldState: { invalid, error },
      }) => (
        <NoFormRadioGroup
          {...props}
          component={component ? component : <MuiRadio />}
          required={rules?.required ? true : false}
          error={invalid}
          errorMessage={error ? error.message : undefined}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
