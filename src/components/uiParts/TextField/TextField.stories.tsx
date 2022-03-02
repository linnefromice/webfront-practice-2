import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RawTextField as TextFieldComponent } from ".";

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
  helperText: "Example helperText",
};

export const TextFieldForAmount = Template.bind({});
TextFieldForAmount.args = {
  ...TextField.args,
  amount: true,
};
