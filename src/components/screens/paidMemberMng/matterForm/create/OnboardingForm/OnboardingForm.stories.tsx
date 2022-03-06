import { ComponentMeta, ComponentStory } from "@storybook/react";
import { OnboardingForm as OnboardingFormComponent } from ".";

export default {
  title: "screens/paidMemberMng/matterForm/create/OnboardingForm",
  component: OnboardingFormComponent,
} as ComponentMeta<typeof OnboardingFormComponent>;

export const OnboardingForm: ComponentStory<typeof OnboardingFormComponent> =
  () => <OnboardingFormComponent onSubmit={console.log} backPage={() => {}} />;
