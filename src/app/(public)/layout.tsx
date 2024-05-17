import React from "react";
import Footer from "@/app/ui/Footer";
import Header from "../ui/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="h-[60px]"></div>
      <section className="min-h-[calc(100vh_-_100px_-_60px)] heropattern-topography-yellow-200">
        {children}
      </section>
      <Footer />
    </>
  );
}
