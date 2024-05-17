import { SiFacebook } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="h-[200px] w-full bg-yellow-300 px-16 py-4 md:h-[100px]">
      <div className="mx-auto flex h-full w-full max-w-screen-2xl flex-col items-center justify-between md:flex-row text-slate-800 hover:text-slate-700 text-center">
        <div className="flex items-center gap-4">
          {/* Facebook */}
          <a href="https://www.facebook.com/tagparak.bfr/">
            <SiFacebook
              className="text-slate-800 hover:text-slate-700"
              size={30}
            />
          </a>

          {/* Add more icons here */}
        </div>

        <span>
          Copyright © 2024 Tagparak Beachfront Resort. All rights reserved.
        </span>

        <Link
          href="/login"
          className="border border-transparent hover:border-b-black"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
