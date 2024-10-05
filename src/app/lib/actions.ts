"use server";

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { AuthError } from "next-auth";
import { z } from "zod";
import { signIn, signOut } from "@/auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    await signIn("credentials", {
      username,
      password,
      redirectTo: "/users",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut();
}

export async function fetchUsers() {
  noStore();

  try {
    const data = await sql`
      SELECT * FROM users
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch users.");
  }
}

export async function fetchRentals() {
  noStore();

  try {
    const data = await sql`
      SELECT * FROM rental
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch rentals.");
  }
}

// TODO: Refactor. Consolidate get all rows for a table.
export async function fetchAmenities() {
  noStore();

  try {
    const data = await sql`
      SELECT * FROM amenity
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch amenities.");
  }
}

export async function submitContactForm(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const contact = formData.get("contact");
    const message = formData.get("message");

    const parsedFormData = z
      .object({
        fullName: z
          .string()
          .min(3, { message: "Full name must contain at least 3 characters." }),
        email: z.string().email({ message: "Email is invalid." }),
        contact: z
          .string()
          .regex(
            new RegExp(/^09\d{9}$/),
            "Contact number is invalid. Use the 09XXXXXXXXX format.",
          ),
        message: z
          .string()
          .min(3, { message: "Message must contain at least 3 characters." }),
      })
      .safeParse({
        fullName,
        email,
        contact,
        message,
      });

    if (parsedFormData.success) {
      const { fullName, email, contact, message } = parsedFormData.data;

      await sql`
        INSERT INTO message (name, email, contact, message)
        VALUES (${fullName}, ${email}, ${contact}, ${message})
      `;
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.issues.map((issue) => issue.message).join(", ");
    }

    return "Something went wrong.";
  } finally {
    return "success";
  }
}
