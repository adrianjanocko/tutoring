import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({
  children,
  heading,
  subheading,
  imageUrl,
}: {
  children: ReactNode;
  heading: string;
  subheading: string;
  imageUrl: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[55%,45%] w-full min-h-screen">
      <div>
        <Link href="/" className="absolute z-10 top-14 left-14">
          <Logo />
        </Link>

        <div className="relative h-full w-full">
          <Image
            src={imageUrl}
            alt="Preview Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="p-12 flex flex-col justify-center">
        <div className="grid gap-1 mb-7">
          <h1 className="text-4xl font-bold">{heading}</h1>
          <p className="text-grey text-md">{subheading}</p>
        </div>

        {children}
      </div>
    </div>
  );
}
