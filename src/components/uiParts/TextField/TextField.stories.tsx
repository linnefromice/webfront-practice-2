import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NoFormTextField as TextFieldComponent } from ".";

export default {
  title: "uiParts/TextField",
  component: TextFieldComponent,
} as ComponentMeta<typeof TextFieldComponent>;

const Template: ComponentStory<typeof TextFieldComponent> = (args) => (
  <TextFieldComponent {...args} />
);

export const TextField = Template.bind({});
TextField.args = {
  label: "Example label",
  caption: "Example caption",
};

export const TextFieldWithError = Template.bind({});
TextFieldWithError.args = {
  ...TextField.args,
  error: true,
  helperText: "Example error",
};

export const TextFieldForAmount = Template.bind({});
TextFieldForAmount.args = {
  ...TextField.args,
  amount: true,
};
