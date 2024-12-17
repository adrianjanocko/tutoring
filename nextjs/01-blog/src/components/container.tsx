import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={twMerge(
        "grid gap-6 justify-items-center text-center",
        className
      )}
    >
      {children}
    </div>
  );
}
