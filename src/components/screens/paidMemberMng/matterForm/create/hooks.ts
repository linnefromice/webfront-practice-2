import { useState } from "react";
import { FormData as FirstFormData } from "./FirstForm/types";
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
  selectContractType?: SelectContractTypeFormData;
  // XxxFormData: ...
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
      selectContractType: v,
    });
  };

  const navigatePaymentMethod = () => {
    setFormInfo({
      ...formInfo,
      currentPage: "PAYMENT_METHOD",
    });
  };

  const navigateOnboarding = () => {
    setFormInfo({
      ...formInfo,
      currentPage: "ONBOARDING",
    });
  };

  return {
    formInfo,
    closingFirstForm,
    closingSelectContractType,
    navigatePaymentMethod,
    navigateOnboarding,
  };
};
