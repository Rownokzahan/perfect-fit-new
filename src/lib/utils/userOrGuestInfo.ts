import { headers } from "next/headers";
import { auth } from "../auth";
import { createGuestId, getGuestId } from "./guestId";

interface UserOrGuestInfo {
  ownerId: string;
  userType: "user" | "guest";
}

export const getUserOrGuestInfo = async (): Promise<UserOrGuestInfo | null> => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user?.id) {
    return {
      ownerId: session.user.id,
      userType: "user",
    };
  }

  const guestId = await getGuestId();
  if (guestId) {
    return {
      ownerId: guestId,
      userType: "guest",
    };
  }

  return null;
};

export const createGuestInfo = async (): Promise<UserOrGuestInfo> => {
  const guestId = await createGuestId();

  return {
    ownerId: guestId,
    userType: "guest",
  };
};
