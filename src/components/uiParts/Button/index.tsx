import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";
import { VFC } from "react";

type ButtonProps = Omit<MuiButtonProps, "color"> & {
  color?: "primary" | "error" | "normal" | "text";
};

const NormalButton = styled(MuiButton)<MuiButtonProps>(({ _ }) => ({
  "&.MuiButton-contained": {
    backgroundColor: "#1e1e1e",
    color: "white",
    boxShadow: "0px 0px 0px 0px",
    "&:hover": {
      backgroundColor: "#3c3c3c",
    },
    "&:disabled": {
      color: "#FFFFFF",
      backgroundColor: "#DDDFE1",
      border: "0px",
    },
  },
  "&.MuiButton-outlined": {
    color: "#1e1e1e",
    border: `1px solid #1e1e1e`,
    boxSizing: "border-box",
    "&:hover": {
      color: "#3c3c3c",
      border: `1px solid #3c3c3c`,
      boxSizing: "border-box",
      backgroundColor: "#FFFFFF",
    },
    "&:disabled": {
      color: "#FFFFFF",
      backgroundColor: "#DDDFE1",
      border: "0px",
    },
  },
}));

const TextButton = styled(MuiButton)<MuiButtonProps>(({ _ }) => ({
  "&.MuiButton-contained": {
    backgroundColor: "	#777777",
    color: "white",
    boxShadow: "0px 0px 0px 0px",
    "&:hover": {
      backgroundColor: "#999999",
    },
    "&:disabled": {
      color: "#FFFFFF",
      backgroundColor: "#DDDFE1",
      border: "0px",
    },
  },
  "&.MuiButton-outlined": {
    color: "	#777777",
    border: `1px solid 	#777777`,
    boxSizing: "border-box",
    "&:hover": {
      color: "#999999",
      border: `1px solid #999999`,
      boxSizing: "border-box",
      backgroundColor: "#FFFFFF",
    },
    "&:disabled": {
      color: "#FFFFFF",
      backgroundColor: "#DDDFE1",
      border: "0px",
    },
  },
}));

export const Button: VFC<ButtonProps> = ({ color, ...props }) => {
  if (color === "primary" || color === "error" || color === undefined)
    return <MuiButton color={color} {...props} />;
  if (color === "normal") return <NormalButton {...props} />;
  if (color === "text") return <TextButton {...props} />;
  return <></>;
};
