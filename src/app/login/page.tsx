"use client";

import { Button } from "@headlessui/react";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Form from "../ui/Form";

export default function Page() {
  const router = useRouter();

  return (
    <div className="heropattern-topography-yellow-200">
      <div className="absolute left-8 top-8 flex items-center gap-2 text-blue-600 hover:text-blue-500">
        <ArrowLeftCircleIcon className="size-6" />
        <Button onClick={() => router.back()}>Back to homepage</Button>
      </div>

      <div className="mx-auto flex min-h-screen max-w-screen-2xl items-center justify-center lg:grid lg:grid-cols-2">
        <Form />
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
