import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import ErrorMessage from "./error-message";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type: string;
  placeholder?: string;
  error?: FieldError;
  isPending?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", placeholder, error, isPending, ...props }, ref) => {
    return (
      <div className="grid gap-1">
        {label && (
          <label htmlFor={props.id} className="text-sm">
            {label}
          </label>
        )}
        <input
          id={props.id}
          type={type}
          ref={ref}
          placeholder={placeholder}
          className={twMerge(
            type !== "checkbox" &&
              "input w-full border-[1px] border-black focus:outline-none",
            type === "checkbox" && "checkbox rounded-md border-black size-5"
          )}
          disabled={isPending}
          {...props}
        />
        {error && <ErrorMessage error={error} />}
      </div>
    );
  }
);

export default Input;
