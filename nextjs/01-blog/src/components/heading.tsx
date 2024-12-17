import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1 className={twMerge("font-bold text-3xl text-center", className)}>
      {children}
    </h1>
  );
}
