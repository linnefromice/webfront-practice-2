import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WrappedRawDropzone as DropzoneComponent } from ".";

export default {
  title: "organisms/Dropzone/WrappedDropzone",
  component: DropzoneComponent,
} as ComponentMeta<typeof DropzoneComponent>;

const Template: ComponentStory<typeof DropzoneComponent> = (args) => (
  <DropzoneComponent {...args} />
);

export const WrappedDropzone = Template.bind({});
WrappedDropzone.args = {
  label: "Example label",
  caption: "Example caption",
};

export const WrappedDropzoneWithError = Template.bind({});
WrappedDropzoneWithError.args = {
  ...WrappedDropzone.args,
  errorMessage: "Example errorMessage",
};
