import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="relative w-36 h-16">
        <Image src="/images/logo.svg" alt="Logo" fill quality={100} />
      </div>
    </Link>
  );
}
