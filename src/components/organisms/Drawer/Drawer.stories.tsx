import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Drawer as DrawerComponent } from ".";

export default {
  title: "organisms/Drawer",
  component: DrawerComponent,
} as ComponentMeta<typeof DrawerComponent>;

const Template: ComponentStory<typeof DrawerComponent> = (args) => (
  <DrawerComponent {...args} />
);

export const Drawer = Template.bind({});
Drawer.parameters = {
  viewport: {
    defaultViewport: "Laptop",
  },
};

export const MobileDrawer = Template.bind({});
MobileDrawer.parameters = {
  viewport: {
    defaultViewport: "Mobile",
  },
};
