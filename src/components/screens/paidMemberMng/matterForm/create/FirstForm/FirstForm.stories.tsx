import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Contents as FirstFormContentsComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/create/FirstForm",
  component: FirstFormContentsComponent,
} as ComponentMeta<typeof FirstFormContentsComponent>;

export const FirstForm: ComponentStory<typeof FirstFormContentsComponent> =
  () => <FirstFormContentsComponent onSubmit={console.log} />;
