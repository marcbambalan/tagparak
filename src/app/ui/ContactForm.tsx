"use client";

import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import notify from "devextreme/ui/notify";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { submitContactForm } from "../lib/actions";

const ContactForm = () => {
  const [state, dispatch] = useFormState(submitContactForm, undefined);
  const success = state === "success";
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (success) {
      form.current?.reset();
      notify("Message sent!");
      router.replace("/");
    }
  }, [success, router]);

  return (
    <div className="flex flex-col place-content-center items-center">
      <form
        action={dispatch}
        className="w-1/2 w-full min-w-[320px] rounded-lg bg-white p-8 drop-shadow-2xl sm:max-w-[480px]"
        ref={form}
      >
        <Fieldset className="mb-2">
          <Field className="mt-2 flex flex-col">
            <Label htmlFor="fullName" className="pb-2 font-bold">
              Full name
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Please enter your full name..."
              className="rounded-lg border border-slate-300 px-4 py-2"
              required
            />
          </Field>
          <Field className="mt-2 flex flex-col">
            <Label htmlFor="email" className="pb-2 font-bold">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Please enter your email address..."
              className="rounded-lg border border-slate-300 px-4 py-2"
              required
            />
          </Field>
          <Field className="mt-2 flex flex-col">
            <Label htmlFor="contact" className="pb-2 font-bold">
              Contact number
            </Label>
            <Input
              id="contact"
              name="contact"
              placeholder="Please enter your contact number..."
              className="rounded-lg border border-slate-300 px-4 py-2"
              required
            />
          </Field>
          <Field className="mt-2 flex flex-col">
            <Label htmlFor="message" className="pb-2 font-bold">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please enter your message..."
              className="rounded-lg border border-slate-300 px-4 py-2"
              rows={3}
              required
            />
          </Field>
        </Fieldset>
        {!success && state && (
          <ul className="mb-2">
            {state.split(", ").map((message) => (
              <li className="text-red-600" key={message}>
                {`❌ ${message}`}
              </li>
            ))}
          </ul>
        )}
        <Button
          type="submit"
          className="w-full rounded-full bg-yellow-300 p-2 hover:bg-yellow-200"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
