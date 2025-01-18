import { FieldError } from "react-hook-form";

interface ErrorMessageProps {
  error?: FieldError;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error || !error.message) return null;

  return <p className="text-red-500 text-sm mt-1">{error.message}</p>;
}
