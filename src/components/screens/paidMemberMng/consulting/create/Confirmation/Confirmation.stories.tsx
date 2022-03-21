import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Confirmation as ConfirmationComponent } from ".";
import { REQUIRED_FORM_ITEM_VALUES } from "../mocks";

export default {
  title: "screens/paidMemberMng/consulting/create/Confirmation",
  component: ConfirmationComponent,
} as ComponentMeta<typeof ConfirmationComponent>;

export const Confirmation: ComponentStory<typeof ConfirmationComponent> =
  () => (
    <ConfirmationComponent
      formData={REQUIRED_FORM_ITEM_VALUES}
      backPage={() => {}}
    />
  );
