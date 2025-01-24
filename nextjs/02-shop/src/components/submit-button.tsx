import { ReactNode } from "react";
import Button from "./button";

interface SubmitButtonProps {
  isPending: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export default function SubmitButton({
  isPending,
  children,
  onClick,
}: SubmitButtonProps) {
  return (
    <Button size="sm" type="submit" disabled={isPending} onClick={onClick}>
      {isPending ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        children
      )}
    </Button>
  );
}
