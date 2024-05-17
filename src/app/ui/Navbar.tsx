'use client';

import { Bars3Icon } from '@heroicons/react/16/solid';
import NavLinks from './NavLinks';

export default function NavBar() {
  return (
    <>
      <NavLinks />
      <button
        className="rounded-full bg-white p-4 xl:hidden"
        data-collapse-toggle="navbar-default"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="size-6" />
      </button>
    </>
  );
}
