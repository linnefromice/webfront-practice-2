import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button as ButtonComponent } from ".";

export default {
  title: "uiParts/Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  color: "primary",
  variant: "outlined",
  children: "Submit",
};

export const ErrorButton = Template.bind({});
ErrorButton.args = {
  color: "error",
  variant: "outlined",
  children: "Error",
};

export const NormalButton = Template.bind({});
NormalButton.args = {
  color: "normal",
  variant: "outlined",
  children: "Normal",
  disabled: false,
};

export const NormalContainedButton = Template.bind({});
NormalContainedButton.args = {
  ...NormalButton.args,
  variant: "contained",
};

export const TextButton = Template.bind({});
TextButton.args = {
  color: "text",
  variant: "outlined",
  children: "Text",
  disabled: false,
};

export const TextContainedButton = Template.bind({});
TextContainedButton.args = {
  ...TextButton.args,
  variant: "contained",
};
