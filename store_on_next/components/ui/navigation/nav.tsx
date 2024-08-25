import { auth } from "@/server/auth";
import Logo from "./logo";
import UserButton from "./user-btn";

export default async function Nav() {
  const session = await auth();
  if (session)
    return (
      <header className="bg-slate-400 py-4 ">
        <nav>
          <ul className="flex justify-between px-2">
            <li>
              <Logo />
            </li>
            <li>
              <UserButton expires={session?.expires} user={session.user} />
            </li>
          </ul>
        </nav>
      </header>
    );
}
