"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const BackButton = ({
  href,
  label,
}: {
  href: string;
  label: string;
}) => {
  return (
    <Button variant={"link"} asChild className="flex m-auto">
      <Link area-label={label} href={href}>
        {label}
      </Link>
    </Button>
  );
};
