import { useState } from "react";
import { FormData as ContractTypeFormData } from "./ContractTypeForm/types";
import { FormData as FirstFormData } from "./FirstForm/types";
import { FormData as OnBoardingFormData } from "./OnboardingForm/types";
import { FormData as PaymentMethodFormData } from "./PaymentMethodForm/types";
import { FormData as SelectContractTypeFormData } from "./SelectContractTypeForm/types";
import {
  MatterFormInfo,
  PaymentMethodKeyType,
  SelectContractKeyType,
  UseMatterFormReturn,
} from "./types";

export const useMatterForm = (): UseMatterFormReturn => {
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
      currentPage: "CONFIRMATION",
      onBoardingFormData: v,
    });
  };

  const backPage = () => {
    if (formInfo.currentPage === "SELECT_CONTRACT_TYPE")
      setFormInfo({
        ...formInfo,
        currentPage: "FIRST",
      });
    if (formInfo.currentPage === "CONTRACT_TYPE")
      setFormInfo({
        ...formInfo,
        currentPage: "SELECT_CONTRACT_TYPE",
      });
    if (formInfo.currentPage === "PAYMENT_METHOD")
      setFormInfo({
        ...formInfo,
        currentPage: "CONTRACT_TYPE",
      });
    if (formInfo.currentPage === "ONBOARDING")
      setFormInfo({
        ...formInfo,
        currentPage: "PAYMENT_METHOD",
      });
  };

  const getContractType = (): SelectContractKeyType | undefined =>
    formInfo.selectContractTypeFormData?.selectContractType;

  const getPaymentMethod = (): PaymentMethodKeyType | undefined =>
    formInfo.contractTypeFormData?.paymentMethod;

  return {
    formInfo,
    closingFirstForm,
    closingSelectContractType,
    closingContractType,
    closingPaymentMethod,
    closingOnboarding,
    getContractType,
    getPaymentMethod,
    backPage,
  };
};
