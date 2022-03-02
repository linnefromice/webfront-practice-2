import { Radio } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { RawRadioGroup as RadioGroupComponent } from ".";

export default {
  title: "uiParts/RadioGroup",
  component: RadioGroupComponent,
} as ComponentMeta<typeof RadioGroupComponent>;

const Template: ComponentStory<typeof RadioGroupComponent> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <RadioGroupComponent
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const RadioGroup = Template.bind({});
RadioGroup.args = {
  value: ".js",
  label: "Example label",
  id: "storybook-radiogroup",
  choices: [
    { label: "JavaScript", value: ".js" },
    { label: "TypeScript", value: ".ts" },
    { label: "YAML", value: ".yaml" },
    { label: "JSON", value: ".json" },
  ],
  component: <Radio />,
  direction: "row",
  caption: "Example caption",
};

export const RadioGroupWithError = Template.bind({});
RadioGroupWithError.args = {
  ...RadioGroup.args,
  error: true,
  errorMessage: "Example errorMessage",
};
