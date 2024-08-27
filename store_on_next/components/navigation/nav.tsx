import { auth } from "@/server/auth";
import Logo from "./logo";
import UserButton from "./user-btn";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default async function Nav() {
  const session = await auth();

  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between ">
          <li>
            <Link href={"/"}>
              <Logo />
            </Link>
          </li>
          {!session ? (
            <li>
              <Button asChild>
                <Link className="flex gap-2 justify-between" href="/auth/login">
                  <LogIn size={16} />
                  <span>Login</span>
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton expires={session?.expires} user={session.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
