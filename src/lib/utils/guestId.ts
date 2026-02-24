import { cookies } from "next/headers";
import crypto from "crypto";

const GUEST_SECRET = process.env.GUEST_SECRET;

if (!GUEST_SECRET) {
  throw new Error("Missing GUEST_SECRET env variable");
}

const GUEST_COOKIE = "guest_id";

const sign = (id: string) =>
  crypto.createHmac("sha256", GUEST_SECRET).update(id).digest("hex");

export const createGuestId = async (): Promise<string> => {
  const newGuestId = crypto.randomUUID();
  const sig = sign(newGuestId);

  const cookieStore = await cookies();

  cookieStore.set({
    name: GUEST_COOKIE,
    value: `${newGuestId}.${sig}`,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // Use secure cookies in production. Disabled in development because HTTP cannot set secure cookies.
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: "lax",
  });

  return newGuestId;
};

export const getGuestId = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(GUEST_COOKIE)?.value;

  if (!cookie) {
    return null;
  }

  const [id, sig] = cookie.split(".");

  if (id && sig && sign(id) === sig) {
    return id;
  }

  return null;
};

export const removeGuestId = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(GUEST_COOKIE);
};
