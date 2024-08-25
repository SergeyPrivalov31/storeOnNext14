"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Button } from "../button";

export default function UserButton({ user }: Session) {
  return (
    <div className="flex gap-1">
      <h2 className="bg-red-200 rounded-sm p-1">{user?.email}</h2>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
