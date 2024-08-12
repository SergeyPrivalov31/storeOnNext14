import Link from "next/link";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="h-24 w-full bg-blue-900">
        <h1>ABOUT</h1>
        <Link href={"/about/me"}>Go to Me</Link>
      </div>
      {children}
    </div>
  );
}
