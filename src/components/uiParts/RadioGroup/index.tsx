import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Stack,
} from "@mui/material";
import { VFC } from "react";
import { Controller, useFormContext } from "react-hook-form";

type RawRadioGroupType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  label: string;
  id: string;
  choices: { label: string; value: string }[];
  component: JSX.Element;
  direction: "column" | "row";
};

export const RawRadioGroup: VFC<RawRadioGroupType> = ({
  value,
  onChange,
  label,
  id,
  choices,
  component,
  direction,
}) => {
  return (
    <FormControl>
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
    </FormControl>
  );
};

type RadioGroupProps = Omit<RawRadioGroupType, "value" | "onChange"> & {
  formDataKey: string;
};
export const RadioGroup: VFC<RadioGroupProps> = ({ formDataKey, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={formDataKey}
      render={({ field: { value, onChange } }) => (
        <RawRadioGroup {...props} value={value} onChange={onChange} />
      )}
    />
  );
};
