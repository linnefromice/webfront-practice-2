import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ContractTypeForm as ContractTypeFormComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/create/ContractTypeForm",
  component: ContractTypeFormComponent,
} as ComponentMeta<typeof ContractTypeFormComponent>;

export const ContractTypeForm: ComponentStory<
  typeof ContractTypeFormComponent
> = () => (
  <ContractTypeFormComponent onSubmit={console.log} contractType={"ChiraCeo"} />
);
