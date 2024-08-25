"use client";

import { AuthCard } from "./auth-card";

export const LoginForm = () => {
  return (
    <AuthCard
      backButtonHref="/auth/registration"
      backButtonLabel="Create a new account"
      cardTitle="Welcome back!"
      cardDescription="auth page"
      showSocials
    >
      <p></p>
    </AuthCard>
  );
};
