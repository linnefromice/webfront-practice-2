import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Contents as ContentsComponent } from ".";

export default {
  title: "screens/paidMemberMng/consulting/create/Form",
  component: ContentsComponent,
} as ComponentMeta<typeof ContentsComponent>;

export const Form: ComponentStory<typeof ContentsComponent> = () => (
  <ContentsComponent onSubmit={console.log} />
);
