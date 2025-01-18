import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type: string;
  placeholder?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", placeholder, ...props }, ref) => {
    return (
      <div className="grid gap-1">
        {label && <label className="text-sm">{label}</label>}
        <input
          type={type}
          ref={ref}
          placeholder={placeholder}
          className="w-full p-4 bg-white border-2 border-black rounded-md focus:outline-none"
          {...props}
        />
      </div>
    );
  }
);

export default Input;
