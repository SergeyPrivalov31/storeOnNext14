"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AuthCard } from "./auth-card";
import { useForm } from "react-hook-form";
//manually adding zod -> validate magik
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/app/types/login-schema";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
//manually import
import { useAction } from "next-safe-action/hooks";
import { emailSignIn } from "@/server/actions/email-signin";
import { cn } from "@/lib/utils";

export const LoginForm = () => {
  const form = useForm({
    //add schema here
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { execute, status } = useAction(emailSignIn);
  //get type from z labrary
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    execute(values);
  };
  return (
    <AuthCard
      backButtonHref="/auth/registration"
      backButtonLabel="Create a new account"
      cardTitle="Welcome back!"
      cardDescription="auth page"
      showSocials
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="yourmail@gmail.com"
                      type="email"
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant={"link"} asChild size={"sm"}>
              <Link href={"/auth/reset"}>Forgot password</Link>
            </Button>
          </div>
          <Button
            className={cn(
              "w-full my-2",
              status === "executing" ? "animate-pulse" : ""
            )}
            type="submit"
          >
            {"Login"}
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
};
