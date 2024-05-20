import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import React from "react";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tagparak Beachfront Resort",
  description:
    "Tagparak Beachfront Resort is a private resort located in Bagotayok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
