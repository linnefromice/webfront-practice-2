import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Drawer as DrawerComponent } from ".";
import { DrawerContents } from "./Contents";

export default {
  title: "organisms/Drawer",
  component: DrawerComponent,
} as ComponentMeta<typeof DrawerComponent>;

const Template: ComponentStory<typeof DrawerComponent> = (args) => (
  <DrawerComponent {...args} />
);

export const Drawer = Template.bind({});
Drawer.args = {
  children: <DrawerContents />,
};
