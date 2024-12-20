import type { Metadata } from "next";
import Link from "next/link";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Blogify",
    default: "Blogify",
  },
  description: "Description of the blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased container mx-auto py-8 flex flex-col justify-between min-h-screen`}
      >
        <header>
          <nav className="flex justify-between items-center">
            <Link className="font-bold text-lg" href="/">
              Next.js Blog
            </Link>

            <ul className="flex items-center gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/random">Random</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-1 content-center self-center">{children}</main>

        <footer>
          <p>© 2024 Next.js Blog</p>
        </footer>
      </body>
    </html>
  );
}
