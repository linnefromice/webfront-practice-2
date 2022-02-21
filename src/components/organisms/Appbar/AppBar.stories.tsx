import { ComponentStory } from "@storybook/react";
import { AppBar as AppBarComponent } from ".";

export default {
  title: "organisms/AppBar",
  component: AppBarComponent,
};

const Template: ComponentStory<typeof AppBarComponent> = (args) => (
  <AppBarComponent {...args} />
);

export const AppBar = Template.bind({});
AppBar.parameters = {
  viewport: {
    defaultViewport: "Laptop",
  },
};

export const MobileAppBar = Template.bind({});
MobileAppBar.parameters = {
  viewport: {
    defaultViewport: "Mobile",
  },
};
