import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import Logo from "./logo";
import Logout from "./logout";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <div className="flex px-10 md:px-20 py-4 justify-between items-center">
      <Logo />
      <div>
        <ul className="flex gap-6">
          <Link
            href="/"
            className="delay-150 transition-colors hover:text-baseGrey cursor-pointer"
          >
            Home
          </Link>
          <li className="delay-150 transition-colors hover:text-baseGrey cursor-pointer">
            Shop
          </li>
          <li className="delay-150 transition-colors hover:text-baseGrey cursor-pointer">
            Our Story
          </li>
          <Link
            href="/blog"
            className="delay-150 transition-colors hover:text-baseGrey cursor-pointer"
          >
            Blog
          </Link>
          <li className="delay-150 transition-colors hover:text-baseGrey cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>
      <div className="text-baseBlack flex gap-4 items-center text-2xl font-bold">
        {/* <HiMagnifyingGlass />
        <IoMdHeartEmpty />
        <HiOutlineShoppingBag /> */}
        {user ? (
          <Logout />
        ) : (
          <a
            className="bg-baseBlack rounded-md py-2 px-4 text-white text-sm"
            href="/login"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
}
