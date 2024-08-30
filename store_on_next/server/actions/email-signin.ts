"use server";
import { LoginSchema } from "@/app/types/login-schema";

import { actionClient } from "@/lib/safe-action";
import { db } from "..";
import { users } from "../schema";
import { eq } from "drizzle-orm";

export const emailSignIn = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    console.log(email, password, code);
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });
    if (existingUser?.email !== email) return { error: "Email not found" };
    // if (!existingUser.emailVerified) return { }
    return { success: email };
  });
