import { auth } from "@/auth"
import Image from "next/image";

export const UserAvatar = async () => {
  const session = await auth();
  if (!session?.user?.image) {
    return null
  }

  return (
    <div>
      <Image
        src={session.user.image}
        alt="user avatar"
        width={40}
        height={40}
      />
    </div>
  );
}