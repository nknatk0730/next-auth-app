import { signOut } from "@/auth";

export const SignoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="border p-2 bg-black rounded text-white">
        SignOut
      </button>
    </form>
  );
}