import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is invalid",
  }),
  password: z.string().min(1, {
    message: "Paaword is required",
  }),
  code: z.optional(
    z.string({
      message: "Invalid code",
    })
  ),
});
