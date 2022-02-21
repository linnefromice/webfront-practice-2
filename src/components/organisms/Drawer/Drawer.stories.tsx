import { Divider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Drawer as DrawerComponent } from ".";

export default {
  title: "organisms/Drawer",
  component: DrawerComponent,
} as ComponentMeta<typeof DrawerComponent>;

const templateItem = [
  <ol>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
  </ol>,
  <Divider />,
  <ul>
    <li>Fourth Item</li>
    <li>Fifth Item</li>
  </ul>,
];

const Template: ComponentStory<typeof DrawerComponent> = (args) => (
  <DrawerComponent {...args} />
);

export const Drawer = Template.bind({});
Drawer.args = {
  children: templateItem,
};
