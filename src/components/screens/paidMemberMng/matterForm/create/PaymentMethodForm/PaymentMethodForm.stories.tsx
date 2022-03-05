import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PaymentMethodForm as PaymentMethodFormComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/create/PaymentMethodForm",
  component: PaymentMethodFormComponent,
} as ComponentMeta<typeof PaymentMethodFormComponent>;

export const PaymentMethodForm: ComponentStory<
  typeof PaymentMethodFormComponent
> = () => (
  <PaymentMethodFormComponent onSubmit={console.log} backPage={() => {}} />
);
