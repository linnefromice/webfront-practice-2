import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FirstForm as FirstFormComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/create/FirstForm",
  component: FirstFormComponent,
} as ComponentMeta<typeof FirstFormComponent>;

export const FirstForm: ComponentStory<typeof FirstFormComponent> = () => (
  <FirstFormComponent onSubmit={console.log} />
);
