import { useState } from "react";
import { FormData as ContractTypeFormData } from "./ContractTypeForm/types";
import { FormData as FirstFormData } from "./FirstForm/types";
import { FormData as OnBoardingFormData } from "./OnboardingForm/types";
import { FormData as PaymentMethodFormData } from "./PaymentMethodForm/types";
import { FormData as SelectContractTypeFormData } from "./SelectContractTypeForm/types";

export type Page =
  | "FIRST"
  | "SELECT_CONTRACT_TYPE"
  | "CONTRACT_TYPE"
  | "PAYMENT_METHOD"
  | "ONBOARDING";

type MatterFormInfo = {
  currentPage: Page;
  firstFormData?: FirstFormData;
  selectContractTypeFormData?: SelectContractTypeFormData;
  contractTypeFormData?: ContractTypeFormData;
  paymentMethodFormData?: PaymentMethodFormData;
  onBoardingFormData?: OnBoardingFormData;
};

export const useMatterForm = () => {
  const [formInfo, setFormInfo] = useState<MatterFormInfo>({
    currentPage: "FIRST",
  });

  const closingFirstForm = (v: FirstFormData) => {
    setFormInfo({
      ...formInfo,
      currentPage: "SELECT_CONTRACT_TYPE",
      firstFormData: v,
    });
  };

  const closingSelectContractType = (v: SelectContractTypeFormData) => {
    setFormInfo({
      ...formInfo,
      currentPage: "CONTRACT_TYPE",
      selectContractTypeFormData: v,
    });
  };

  const closingContractType = (v: ContractTypeFormData) => {
    setFormInfo({
      ...formInfo,
      currentPage: "PAYMENT_METHOD",
      contractTypeFormData: v,
    });
  };

  const closingPaymentMethod = (v: PaymentMethodFormData) => {
    setFormInfo({
      ...formInfo,
      currentPage: "ONBOARDING",
      paymentMethodFormData: v,
    });
  };

  const closingOnboarding = (v: OnBoardingFormData) => {
    setFormInfo({
      ...formInfo,
      onBoardingFormData: v,
    });
  };

  return {
    formInfo,
    closingFirstForm,
    closingSelectContractType,
    closingContractType,
    closingPaymentMethod,
    closingOnboarding,
  };
};
