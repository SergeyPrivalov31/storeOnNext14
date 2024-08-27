"use server";
import { LoginSchema } from "@/app/types/login-schema";

import { actionClient } from "@/lib/safe-action";

export const emailSignIn = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    console.log(email, password, code);

    return { email, password, code };
  });
