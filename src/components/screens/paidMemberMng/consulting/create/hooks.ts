import { useState } from "react";
import { FormData, Page } from "./types";

type FormInfo = {
  currentPage: Page;
  formData?: FormData;
};

export const useForm = () => {
  const [formInfo, setFormInfo] = useState<FormInfo>({
    currentPage: "FORM",
  });

  const closingForm = (v: FormData) => {
    setFormInfo({
      currentPage: "CONFIRMATION",
      formData: v,
    });
  };

  const backPage = () => {
    if (formInfo.currentPage === "CONFIRMATION")
      setFormInfo({
        ...formInfo,
        currentPage: "FORM",
      });
  };

  return {
    formInfo,
    closingForm,
    backPage,
  };
};
