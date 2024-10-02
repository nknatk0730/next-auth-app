import { signIn } from "@/auth";

export const SigninButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button type="submit" className="border p-2 bg-black rounded text-white">
        SignIn
      </button>
    </form>
  );
}