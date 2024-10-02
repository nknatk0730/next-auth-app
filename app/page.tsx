import { auth } from "@/auth";
import { SigninButton } from "./components/auth/signin-button";
import { SignoutButton } from "./components/auth/signout-button";
import { UserAvatar } from "./components/auth/user-avatar";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <div>
        <p>user undefined</p>
        <Link href='/dashboard'>Dashboard</Link>
        <SigninButton />
      </div>
    );
  };

  return (
    <main>
      <p>{session.user?.name}</p>
      <p>{session.user?.email}</p>
      <UserAvatar />
      <Link href='/dashboard'>Dashboard</Link>
      <SignoutButton />
    </main>
  );
}
