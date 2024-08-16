// export const revalidate = 5; //5 sec trottling if refresh page/ work in prod / npm run start
// in npm run dev mode, next go refresh every time and give new page every time ( no cashing )

import { cookies } from "next/headers";

// export const dynamic = "force-dynamic"; //need to dynamic refresh, it also worked when you add coockies in function
export default async function Home() {
  cookies();
  return (
    <main className="flex align-center juctify-center gap-2">
      <div>{Date.now()}</div>
    </main>
  );
}

//SSG (Static Site Generation) --> by default
//ISR (Incremental Static Generation)
//SSR -->  when coockies added
