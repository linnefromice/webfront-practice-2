import { useState } from "react";

export type Page =
  | "FIRST"
  | "SELECT_CONTRACT_TYPE"
  | "CONTRACT_TYPE"
  | "PAYMENT_METHOD"
  | "ONBOARDING";

export const useForm = () => {
  const [page, setPage] = useState<Page>("FIRST");

  const navigateSelectContractType = () => setPage("SELECT_CONTRACT_TYPE");
  const navigateContractType = () => setPage("CONTRACT_TYPE");
  const navigatePaymentMethod = () => setPage("PAYMENT_METHOD");
  const navigateOnboarding = () => setPage("ONBOARDING");

  return {
    page,
    navigateSelectContractType,
    navigateContractType,
    navigatePaymentMethod,
    navigateOnboarding,
  };
};
