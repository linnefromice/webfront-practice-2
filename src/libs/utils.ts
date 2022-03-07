import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";
import { ValidationRule } from "react-hook-form";

// About User Interface
export const useCommonHooks = () => {
  return {
    isMobile: useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm")),
  };
};

// About form validations
export const ONLY_NUMBER_PATTERN: ValidationRule<RegExp> = {
  value: /\d/,
  message: "数値のみで入力してください",
};
export const DATE_PATTERN: ValidationRule<RegExp> = {
  value: /\d{8}/,
  message: "yyyyMMdd の形式で日付を入力してください",
};
export const TEL_NUMBER_PATTERN: ValidationRule<RegExp> = {
  value: /(\d{2,3}-\d{4}-\d{4})/,
  message: "ハイフンありの形式で入力してください(NN-NNNN-NNNN)",
};
export const MAIL_ADDRESS_PATTERN: ValidationRule<RegExp> = {
  value: /.*@.*/,
  message: "正しい形式で入力してください",
};
