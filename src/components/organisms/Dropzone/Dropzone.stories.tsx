import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NoFormDropzone as DropzoneComponent } from ".";

export default {
  title: "organisms/Dropzone",
  component: DropzoneComponent,
} as ComponentMeta<typeof DropzoneComponent>;

export const Dropzone: ComponentStory<typeof DropzoneComponent> = (args) => (
  <DropzoneComponent {...args} />
);
