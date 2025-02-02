import { ReactNode } from "react";
import Button from "./button";

interface SubmitButtonProps {
  size?: "sm";
  disabled: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export default function SubmitButton({
  size,
  disabled,
  children,
  onClick,
}: SubmitButtonProps) {
  return (
    <Button size={size} type="submit" disabled={disabled} onClick={onClick}>
      {disabled ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        children
      )}
    </Button>
  );
}
