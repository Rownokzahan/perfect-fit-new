import { headers } from "next/headers";
import { auth } from "../auth";
import { getGuestId } from "./guestId";

export const getGuestOrUserId = async (): Promise<string | null> => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session?.user?.id) {
    return session.user.id;
  }

  return getGuestId();
};
