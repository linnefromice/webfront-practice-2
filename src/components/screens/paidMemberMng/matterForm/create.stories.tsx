import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CreateScreen as CreateScreenComponent } from "./create";

export default {
  title: "screens/paidMemberMng/matterForm/create",
  component: CreateScreenComponent,
} as ComponentMeta<typeof CreateScreenComponent>;

export const CreateScreen: ComponentStory<typeof CreateScreenComponent> =
  () => <CreateScreenComponent />;
