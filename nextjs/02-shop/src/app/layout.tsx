import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krist",
  description: "Online e-commerce demo store..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${jost.className} antialiased`}>
        {children}

        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
