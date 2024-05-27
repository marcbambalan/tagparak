"use client";

import { Button, Field, Fieldset, Label } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import SectionHeader from "@/app/ui/SectionHeader";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="flex flex-col place-content-center items-center">
      <Image
        src="/images/tagparak-icon.png"
        alt="Tagparak Beachfront Resort"
        width={100}
        height={100}
      />
      <SectionHeader text="Sign in" />
      <form action={dispatch} className="w-1/2 min-w-[320px] max-w-[350px]">
        <Fieldset>
          <Field className="mt-2 flex flex-col">
            <Label htmlFor="username" className="pb-2 font-bold">
              Username
            </Label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="rounded-full border border-slate-300 px-4 py-2"
              required
            />
          </Field>
          <Field className="mt-2 flex flex-col">
            <Label htmlFor="password" className="pb-2 font-bold">
              Password
            </Label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="rounded-full border border-slate-300 px-4 py-2"
              minLength={6}
              required
            />
          </Field>
        </Fieldset>
        {errorMessage && (
          <span className="mt-2 flex items-center gap-1 text-xs text-red-600">
            <ExclamationCircleIcon className="h-4 w-4" />
            {errorMessage}
          </span>
        )}
        <div className={errorMessage ? "mt-2" : "mt-4"}>
          <LoginButton />
        </div>
      </form>
    </div>
  );
}

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full rounded-full bg-yellow-300 p-2 hover:bg-yellow-200"
      aria-disabled={pending}
    >
      Sign in
    </Button>
  );
};
