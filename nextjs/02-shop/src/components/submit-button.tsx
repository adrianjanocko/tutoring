import { ReactNode } from "react";
import Button from "./button";

interface SubmitButtonProps {
  size?: "sm";
  isPending: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export default function SubmitButton({
  size,
  isPending,
  children,
  onClick,
}: SubmitButtonProps) {
  return (
    <Button size={size} type="submit" disabled={isPending} onClick={onClick}>
      {isPending ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        children
      )}
    </Button>
  );
}
