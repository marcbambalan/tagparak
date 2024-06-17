"use server";

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { AuthError } from "next-auth";
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
