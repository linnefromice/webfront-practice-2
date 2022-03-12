import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form as FormComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/create_chiraceo/Form",
  component: FormComponent,
} as ComponentMeta<typeof FormComponent>;

export const Form: ComponentStory<typeof FormComponent> = () => (
  <FormComponent />
);
