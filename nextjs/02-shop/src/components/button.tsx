import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm";
  variant?: "black";
  href?: string;
}

function Button({
  size,
  variant = "black",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = twMerge(
    "w-full p-5 text-white rounded-md hover:bg-grey duration-300",
    size === "sm" && "py-2 px-6",
    variant === "black" && "bg-black",
    className
  );

  return href ? (
    <Link href={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
