import { useState } from "react";
import { FormData as FirstFormData } from "./FirstForm/types";

export type Page =
  | "FIRST"
  | "SELECT_CONTRACT_TYPE"
  | "CONTRACT_TYPE"
  | "PAYMENT_METHOD"
  | "ONBOARDING";

type FormInfo = {
  currentPage: Page;
  firstFormData?: FirstFormData;
  // XxxFormData: ...
};

export const useForm = () => {
  const [formInfo, setFormInfo] = useState<FormInfo>({
    currentPage: "FIRST",
  });

  const closingFirstForm = (v: FirstFormData) => {
    setFormInfo({
      ...formInfo,
      currentPage: "SELECT_CONTRACT_TYPE",
      firstFormData: v,
    });
  };

  const navigateContractType = () => {
    setFormInfo({
      ...formInfo,
      currentPage: "CONTRACT_TYPE",
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
    navigateContractType,
    navigatePaymentMethod,
    navigateOnboarding,
  };
};
