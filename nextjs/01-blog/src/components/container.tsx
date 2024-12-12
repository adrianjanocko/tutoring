import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={twMerge("grid gap-4 justify-items-center", className)}>
      {children}
    </div>
  );
}
