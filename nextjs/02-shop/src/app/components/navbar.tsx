import Logo from "@/components/logo";
import { IconHeart, IconShoppingBag, IconZoom } from "@tabler/icons-react";
import Link from "next/link";
import User from "./user";

export default async function Navbar() {
  return (
    <nav className="container flex justify-between items-center">
      <Logo />

      <ul className="flex gap-7">
        <li>
          <Link className="link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" href="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link className="link" href="/story">
            Our Story
          </Link>
        </li>
        <li>
          <Link className="link" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="link" href="/blog">
            Contact Us
          </Link>
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <div className="flex gap-3">
          <IconZoom className="size-6" />
          <IconHeart className="size-6" />
          <IconShoppingBag className="size-6" />
        </div>

        <User />
      </div>
    </nav>
  );
}
