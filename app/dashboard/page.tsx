import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session) {
    return redirect('/');
  }

  return (
    <div>
      <p>dashboard</p>
      <Link href='/'>Top</Link>
    </div>
  )
}
