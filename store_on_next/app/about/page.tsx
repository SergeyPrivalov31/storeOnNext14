import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Something about</p>
      <Link href="/" title="to main">
        {" "}
        <p>Go to Main</p>
      </Link>
    </div>
  );
}
