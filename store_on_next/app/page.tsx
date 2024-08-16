export default async function Home() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo = await data.json();
  // throw new Error("Ohh my God!");
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
