import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
    <div>
      HOME
      <Link href="/login" className="cursor-pointer">Sign In</Link>
    </div>
    <Button>Click me</Button>
    </>
  );
}
