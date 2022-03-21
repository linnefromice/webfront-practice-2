import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IndexScreen as IndexScreenComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/index",
  component: IndexScreenComponent,
} as ComponentMeta<typeof IndexScreenComponent>;

export const IndexScreen: ComponentStory<typeof IndexScreenComponent> = () => (
  <IndexScreenComponent />
);
