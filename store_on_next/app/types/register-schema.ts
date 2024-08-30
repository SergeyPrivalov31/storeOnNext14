import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is invalid!",
  }),
  password: z.string().min(8, {
    message: "Password must have 8 symbols",
  }),
  name: z.string().min(4, {
    message: "name must be longer that 4 verbs",
  }),
});
