import { cookies } from "next/headers";
export async function setCookie(name: string, uid: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();
  cookieStore.set(name, uid, {
    httpOnly: true,
    expires: expiresAt,
    secure: true,
  });
}

export async function getCookie(name: string) {
  const cookieStore = await cookies();
  const uid = cookieStore.get(name)?.value;
  return uid;
}
