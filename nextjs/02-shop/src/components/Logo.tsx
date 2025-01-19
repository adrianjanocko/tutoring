import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative w-36 h-16">
      <Image src="/images/logo.svg" alt="Logo" fill quality={100} />
    </div>
  );
}
