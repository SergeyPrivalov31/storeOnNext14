import Image from "next/image";

export default async function Home() {
  const data = await await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo = await data.json();
  return (
    <main className="flex align-center juctify-center gap-2">
      <h2>NEXT-APP</h2>
      <br />
      <p>
        TODOS:
        {todo[1].title}
      </p>
    </main>
  );
}
