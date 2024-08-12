import Image from "next/image";

export default function Home() {
  return (
    <main className="flex align-center juctify-center">
      <h2>NEXT-APP</h2>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </main>
  );
}
