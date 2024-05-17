'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Rentals', href: '/rentals' },
  { name: 'Location', href: '/location' },
  { name: 'Contact', href: '/contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'hidden border-2 border-transparent bg-white px-4 py-2 xl:block',
              {
                'font-bold': pathname === link.href,
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
