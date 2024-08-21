// export const revalidate = 5; //5 sec trottling if refresh page/ work in prod / npm run start
// in npm run dev mode, next go refresh every time and give new page every time ( no cashing )

import createPost from "@/server/actions/create-post";
import getPosts from "@/server/actions/get-posts";
import { cookies } from "next/headers";

// export const dynamic = "force-dynamic"; //need to dynamic refresh, it also worked when you add coockies in function

//В серверном компоненте не работает он клик и прочее / по умолчанию данные берутся из формы / в неё и прокидываем action
export default async function Home() {
  cookies();
  const { error, success } = await getPosts();

  if (error) {
    throw new Error(error);
  }
  if (success)
    return (
      <main className="flex align-center juctify-center gap-2">
        <div className="grid grid-cols-2">
          {success?.map((el) => (
            <div key={el.id}>
              <h2 className="mx-5 flex gap-2">
                {el.title}
                <p className="text-blue-800">|</p>{" "}
              </h2>
            </div>
          ))}
          <form className="flex gap-3" action={createPost}>
            <input
              className="bg-black p-5 rounded-lg text-white"
              name="title"
              type="text"
              placeholder="Title"
            />
            <button
              className="bg-black text-white p-5 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    );
}

//SSG (Static Site Generation) --> by default
//ISR (Incremental Static Generation)
//SSR -->  when coockies added
