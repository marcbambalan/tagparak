import { PopoverGroup } from "@headlessui/react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import React from "react";
import "devextreme/dist/css/dx.fluent.saas.light.css";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

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
      <body className={nunito.className}>
        {/**
         * PopoverGroup is added here so that popovers close on outside click.
         */}
        <PopoverGroup>{children}</PopoverGroup>
      </body>
    </html>
  );
}
