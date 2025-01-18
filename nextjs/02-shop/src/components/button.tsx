import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "black";
}

function Button({
  variant = "black",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        "w-full p-5 text-white rounded-md",
        variant === "black" && "bg-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
