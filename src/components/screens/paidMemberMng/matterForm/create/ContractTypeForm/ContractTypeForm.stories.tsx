import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContractTypeForm as ContractTypeFormComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/create/ContractTypeForm",
  component: ContractTypeFormComponent,
  args: {
    onSubmit: console.log,
    backPage: () => {},
  },
} as ComponentMeta<typeof ContractTypeFormComponent>;

const Template: ComponentStory<typeof ContractTypeFormComponent> = (args) => (
  <ContractTypeFormComponent {...args} />
);

export const ChiraCeoForm = Template.bind({});
ChiraCeoForm.args = {
  contractType: "ChiraCeo",
};

export const JoiningAgencyForm = Template.bind({});
JoiningAgencyForm.args = {
  contractType: "JoiningAgency",
};

export const LetterMeasuresAndChiraCeoForm = Template.bind({});
LetterMeasuresAndChiraCeoForm.args = {
  contractType: "LetterMeasuresAndChiraCeo",
};

export const LetterGetForm = Template.bind({});
LetterGetForm.args = {
  contractType: "LetterGet",
};
