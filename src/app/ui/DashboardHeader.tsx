import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <div className="absolute z-10 w-full bg-white drop-shadow-lg">
      <div className="mx-auto flex max-w-screen-2xl items-center space-x-4 px-0 md:px-16 2xl:px-0">
        <div className="flex grow">
          <a href="/dashboard" className="flex items-center">
            <Image
              src="/images/tagparak-icon.png"
              alt="Tagparak Beachfront Resort"
              width={60}
              height={60}
            />
            <span className="hidden sm:block">Tagparak Dashboard</span>
          </a>
        </div>
        <Menu>
          <MenuButton>
            <div className="relative mr-2 h-9 w-9 overflow-hidden rounded-full bg-yellow-100 md:mr-0">
              <svg
                className="absolute -left-1 h-11 w-11 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </MenuButton>
          <MenuItems
            anchor={{ to: "bottom end", gap: 16 }}
            className="z-10 w-[160px] rounded bg-white p-3 text-center shadow-md"
          >
            <MenuItem>
              <Link
                className="mb-2 block rounded-full px-4 py-2 data-[focus]:bg-yellow-100"
                href="/profile"
              >
                Profile
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                className="block rounded-full px-4 py-2 data-[focus]:bg-red-600 data-[focus]:text-white"
                href="/logout"
              >
                Logout
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}
