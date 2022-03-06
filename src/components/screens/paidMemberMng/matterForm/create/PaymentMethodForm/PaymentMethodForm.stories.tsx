import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PaymentMethodForm as PaymentMethodFormComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/create/PaymentMethodForm",
  component: PaymentMethodFormComponent,
  args: {
    onSubmit: console.log,
    backPage: () => {},
  },
} as ComponentMeta<typeof PaymentMethodFormComponent>;

const Template: ComponentStory<typeof PaymentMethodFormComponent> = (args) => (
  <PaymentMethodFormComponent {...args} />
);

export const CreditCardForm = Template.bind({});
CreditCardForm.args = {
  paymentMethod: "CreditCard",
};

export const InvoiceOnetimePaymentForm = Template.bind({});
InvoiceOnetimePaymentForm.args = {
  paymentMethod: "InvoiceOnetimePayment",
};

export const InvoiceDividedPaymentForm = Template.bind({});
InvoiceDividedPaymentForm.args = {
  paymentMethod: "InvoiceDividedPayment",
};
