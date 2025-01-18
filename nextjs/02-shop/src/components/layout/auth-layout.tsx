import Image from "next/image";
import { ReactNode } from "react";
import { Logo } from "../Logo";

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
        <a
          href="/"
          className="absolute z-10 top-14 left-14 flex items-center text-7xl"
        >
          <Logo logoSize={50} />
          <h1>Krist</h1>
        </a>

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
