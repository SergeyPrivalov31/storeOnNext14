"use server";

import { RegisterSchema } from "@/app/types/register-schema";
import { actionClient } from "@/lib/safe-action";
import bcrypt from "bcrypt";
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";

export const emailRegiter = actionClient
  .schema(RegisterSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const existedUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });
    if (existedUser) {
      return { error: "Email already in use" };
    }
    return { success: "Yahhoo" };
  });
