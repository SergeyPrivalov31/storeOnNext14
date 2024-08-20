// export const revalidate = 5; //5 sec trottling if refresh page/ work in prod / npm run start
// in npm run dev mode, next go refresh every time and give new page every time ( no cashing )

import getPosts from "@/server/actions/get-posts";
import { cookies } from "next/headers";

// export const dynamic = "force-dynamic"; //need to dynamic refresh, it also worked when you add coockies in function
export default async function Home() {
  cookies();
  const { error, success } = await getPosts();

  if (error) {
    throw new Error(error);
  }
  if (success)
    return (
      <main className="flex align-center juctify-center gap-2">
        {success?.map((el) => (
          <div key={el.id}>
            <h2>{el.title}</h2>
          </div>
        ))}
      </main>
    );
}

//SSG (Static Site Generation) --> by default
//ISR (Incremental Static Generation)
//SSR -->  when coockies added
