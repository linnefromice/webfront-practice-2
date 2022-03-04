import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SelectContractTypeForm as SelectContractTypeFormComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/create/SelectContractTypeForm",
  component: SelectContractTypeFormComponent,
} as ComponentMeta<typeof SelectContractTypeFormComponent>;

export const SelectContractTypeForm: ComponentStory<
  typeof SelectContractTypeFormComponent
> = () => <SelectContractTypeFormComponent onSubmit={console.log} />;
