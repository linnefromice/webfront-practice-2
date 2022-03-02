import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Stack,
} from "@mui/material";
import { VFC } from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";

type RawRadioGroupType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  id: string;
  label: string;
  choices: { label: string; value: string }[];
  component: JSX.Element;
  direction: "column" | "row";
  caption?: string;
  error?: boolean;
  errorMessage?: string;
};

export const RawRadioGroup: VFC<RawRadioGroupType> = ({
  value,
  onChange,
  id,
  label,
  choices,
  component,
  direction,
  caption,
  error,
  errorMessage,
}) => {
  return (
    <FormControl error={error}>
      <FormLabel id={id} sx={{ fontSize: 12 }}>
        {label}
      </FormLabel>
      {direction === "column" ? (
        <MuiRadioGroup aria-labelledby={id} value={value} onChange={onChange}>
          {choices.map((v) => (
            <FormControlLabel
              key={`${id}.${v.label}`}
              label={v.label}
              value={v.value}
              control={component}
            />
          ))}
        </MuiRadioGroup>
      ) : (
        <MuiRadioGroup aria-labelledby={id} value={value} onChange={onChange}>
          <Stack direction="row" justifyContent="flex-start">
            {choices.map((v) => (
              <FormControlLabel
                key={`${id}.${v.label}`}
                label={v.label}
                value={v.value}
                control={component}
              />
            ))}
          </Stack>
        </MuiRadioGroup>
      )}
      {error && errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      {caption && <FormHelperText error={false}>{caption}</FormHelperText>}
    </FormControl>
  );
};

type RadioGroupProps = Omit<RawRadioGroupType, "value" | "onChange"> & {
  formDataKey: string;
  rules?: RegisterOptions;
};
export const RadioGroup: VFC<RadioGroupProps> = ({
  formDataKey,
  rules,
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
        <RawRadioGroup
          {...props}
          error={invalid}
          errorMessage={error ? error.message : undefined}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
