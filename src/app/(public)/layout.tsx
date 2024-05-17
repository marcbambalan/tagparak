import React from 'react';
import Image from 'next/image';
import NavBar from '@/app/ui/Navbar';
import Footer from '@/app/ui/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="w-full bg-white drop-shadow-lg">
        <nav className="mx-auto max-w-screen-2xl px-0 md:px-16 2xl:px-0">
          <div className="flex items-center space-x-4">
            <div className="flex grow">
              <a href="/" className="flex items-center">
                <Image
                  src="/images/tagparak-icon.png"
                  alt="Tagparak Beachfront Resort"
                  width={60}
                  height={60}
                />
                <span className="hidden sm:block">
                  Tagparak Beachfront Resort
                </span>
              </a>
            </div>
            <NavBar />
          </div>
        </nav>
      </header>
      <section className="heropattern-topography-yellow-200 min-h-[calc(100vh_-_100px_-_60px)]">
        {children}
      </section>
      <Footer />
    </>
  );
}
