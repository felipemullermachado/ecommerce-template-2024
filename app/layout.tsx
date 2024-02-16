import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "reset-css";
import "../app/styles/globals.sass";

const roboto = Roboto({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "E-commerce template 2024",
  description: "Training component development to E-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
