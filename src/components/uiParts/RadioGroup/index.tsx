import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  Stack,
} from "@mui/material";
import { VFC } from "react";

type RadioGroupType = {
  label: string;
  id: string;
  choices: { label: string; value: string }[];
  component: JSX.Element;
  direction: "column" | "row";
};

export const RadioGroup: VFC<RadioGroupType> = ({
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
        <MuiRadioGroup aria-labelledby={id}>
          {choices.map((v) => (
            <FormControlLabel
              key={`${id}.${v.label}`}
              label={v.label}
              value={v.label}
              control={component}
            />
          ))}
        </MuiRadioGroup>
      ) : (
        <MuiRadioGroup aria-labelledby={id}>
          <Stack direction="row" justifyContent="flex-start">
            {choices.map((v) => (
              <FormControlLabel
                key={`${id}.${v.label}`}
                label={v.label}
                value={v.label}
                control={component}
              />
            ))}
          </Stack>
        </MuiRadioGroup>
      )}
    </FormControl>
  );
};
