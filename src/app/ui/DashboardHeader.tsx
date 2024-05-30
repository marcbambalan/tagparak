"use client";

import {
  Button,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { logout } from "@/app/lib/actions";

export default function DashboardHeader() {
  const [errorMessage, dispatch] = useFormState(logout, undefined);

  useEffect(() => console.error(errorMessage), [errorMessage]);

  return (
    <div className="absolute z-10 w-full bg-white drop-shadow-lg">
      <div className="mx-auto flex max-w-screen-2xl items-center space-x-4 px-0 md:px-16 2xl:px-0">
        <div className="flex grow">
          <a href="/scheduler" className="flex items-center">
            <Image
              src="/images/tagparak-icon.png"
              alt="Tagparak Beachfront Resort"
              width={60}
              height={60}
            />
            <span className="hidden sm:block">Tagparak Dashboard</span>
          </a>
        </div>
        <Popover className="relative flex">
          <PopoverButton>
            <div className="mr-2 h-9 w-9 rounded-full text-yellow-300 md:mr-0">
              <UserCircleIcon />
            </div>
          </PopoverButton>
          <PopoverPanel
            anchor={{ to: "bottom end", gap: 16 }}
            className="z-10 w-[160px] rounded bg-white p-3 text-center shadow-md"
          >
            <Link
              className="mb-2 block rounded-full px-4 py-2 hover:bg-yellow-100"
              href="/profile"
            >
              Profile
            </Link>
            <form action={dispatch}>
              <Button
                type="submit"
                className="block w-full rounded-full px-4 py-2 hover:bg-red-600 hover:text-white"
              >
                Sign Out
              </Button>
            </form>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
}
