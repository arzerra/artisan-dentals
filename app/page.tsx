import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
      HOME
      <Link href="/login" className="cursor-pointer">Sign In</Link>
    </div>
    </>
  );
}
