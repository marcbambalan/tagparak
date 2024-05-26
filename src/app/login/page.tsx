import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/app/ui/LoginForm";

export default function Page() {
  return (
    <div className="heropattern-topography-yellow-200">
      <div className="absolute left-8 top-8 flex items-center gap-2 text-blue-600 hover:text-blue-500">
        <ArrowLeftCircleIcon className="size-6" />
        <Link href="/">Back to homepage</Link>
      </div>

      <div className="mx-auto flex min-h-screen max-w-screen-2xl items-center justify-center lg:grid lg:grid-cols-2">
        <LoginForm />
        <div className="max-w-screen relative hidden shadow-md lg:block lg:h-screen">
          <Image
            src="/images/tagparak-hero.jpg"
            alt="Tagparak Beachfront Resort"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
