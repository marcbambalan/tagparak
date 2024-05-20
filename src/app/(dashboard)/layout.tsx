"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Tab,
  TabGroup,
  TabList,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { NavLink } from "../types";
import DashboardHeader from "../ui/DashboardHeader";

const tabs: NavLink[] = [
  {
    name: "Scheduler",
    href: "/scheduler",
  },
  {
    name: "User management",
    href: "/users",
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { push } = useRouter();
  const [selected, setSelected] = useState(tabs[0]);

  const handleListBoxChange = (newSelected: NavLink) => {
    setSelected(newSelected);
    push(newSelected.href);
  };

  return (
    <>
      <DashboardHeader />

      {/* Content */}
      <div className="heropattern-topography-neutral-200">
        <div className="h-[60px]"></div>
        <div className="mx-auto grid h-full min-h-[calc(100vh_-_60px)] max-w-screen-2xl grid-rows-12 px-0 md:px-16 2xl:px-0">
          <div className="row-span-1 py-4">
            <div className="px-4">
              <Listbox value={selected} onChange={handleListBoxChange}>
                <ListboxButton className="relative block w-full rounded bg-yellow-300 py-2 md:hidden">
                  {selected.name}
                  <ChevronDownIcon
                    className="group pointer-events-none absolute right-2.5 top-2.5 size-4"
                    aria-hidden="true"
                  />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom"
                  className="mt-2 w-[calc(100vw_-_2rem)] bg-white drop-shadow-lg"
                >
                  {tabs.map((tab) => (
                    <ListboxOption
                      key={`list-box-option-${tab.name}`}
                      value={tab}
                      className={clsx(
                        "px-4 py-2 text-center data-[focus]:bg-yellow-100",
                        {
                          "font-bold": pathname === tab.href,
                        },
                      )}
                    >
                      {tab.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
            </div>
            <TabGroup className="hidden md:block">
              <TabList className="flex gap-2">
                {tabs.map((tab) => (
                  <Tab
                    key={`tab-${tab.name}`}
                    className={clsx(
                      "rounded-full px-4 py-2 data-[hover]:bg-yellow-100",
                      {
                        "bg-yellow-300": pathname === tab.href,
                      },
                    )}
                  >
                    <Link
                      href={tab.href}
                      aria-current={tab.href === pathname ? "page" : undefined}
                    >
                      {tab.name}
                    </Link>
                  </Tab>
                ))}
              </TabList>
            </TabGroup>
          </div>
          <div className="row-span-11">{children}</div>
        </div>
      </div>
    </>
  );
}
