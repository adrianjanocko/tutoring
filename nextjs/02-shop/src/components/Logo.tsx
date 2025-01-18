interface LogoProps {
  logoSize: number;
}

import Image from "next/image";

export const Logo = ({ logoSize }: LogoProps) => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/images/logo.svg"
        width={logoSize}
        height={logoSize}
        alt="logo"
      />
    </div>
  );
};
