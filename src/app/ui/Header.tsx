"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  { name: "Amenities", href: "/amenities" },
  { name: "Rentals", href: "/rentals" },
  { name: "Location", href: "/location" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <Disclosure
        as="nav"
        className="absolute z-10 w-full bg-white drop-shadow-lg"
      >
        {({ open }) => (
          <>
            <div className="mx-auto flex max-w-screen-2xl items-center space-x-4 px-0 md:px-16 2xl:px-0">
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

              <div className="hidden gap-2 xl:flex">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={link.href === pathname ? "page" : undefined}
                    className={clsx(
                      "hidden border-2 border-transparent bg-white px-4 py-2 xl:block",
                      {
                        "font-bold": pathname === link.href,
                      },
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button*/}
              <DisclosureButton className="rounded-full bg-white p-4 xl:hidden">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>

            <Transition
              enter="duration-200 ease-in origin-top"
              enterFrom="opacity-0 -translate-y-2 scale-y-75"
              enterTo="opacity-100 translate-y-0 scale-y-100"
              leave="duration-200 ease-in origin-top"
              leaveFrom="opacity-100 translate-y-0 scale-y-100"
              leaveTo="opacity-0 -translate-y-2 scale-y-75"
            >
              <DisclosurePanel className="mx-auto max-w-screen-2xl items-center space-x-4 px-0 md:px-16 xl:hidden 2xl:px-0">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {links.map((link) => (
                    <DisclosureButton
                      key={link.name}
                      as="a"
                      href={link.href}
                      className="flex flex-col rounded-full px-4 py-2 hover:bg-yellow-300"
                      aria-current={link.href === pathname ? "page" : undefined}
                    >
                      {link.name}
                    </DisclosureButton>
                  ))}
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
}
