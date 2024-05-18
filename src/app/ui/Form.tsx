import { Button, Field, Fieldset, Label } from "@headlessui/react";
import Image from "next/image";
import SectionHeader from "@/app/ui/SectionHeader";

export default function Form() {
  return (
    <div className="flex flex-col place-content-center items-center">
      <Image
        src="/images/tagparak-icon.png"
        alt="Tagparak Beachfront Resort"
        width={100}
        height={100}
      />
      <SectionHeader text="Sign in" />
      <form className="w-1/2 min-w-[320px] max-w-[350px]">
        <Fieldset>
          <Field className="mt-2 flex flex-col">
            <Label htmlFor="username" className="pb-2 font-bold">
              Username
            </Label>
            <input
              id="username"
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
              type="password"
              placeholder="Password"
              className="rounded-full border border-slate-300 px-4 py-2"
              required
            />
          </Field>
        </Fieldset>
        <span className="hidden text-xs text-red-600">
          Username or password is incorrect.
        </span>
        <Button className="mt-4 w-full rounded-full bg-yellow-300 p-2 hover:bg-yellow-200">
          Sign in
        </Button>
      </form>
    </div>
  );
}
