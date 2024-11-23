import { COOKIE_USER_ID, COOKIE_USER_NAME } from "@/constants";
import Component from "./Component";
import { getCookie } from "cookies-next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Login() {
  const userId = await getCookie(COOKIE_USER_ID, { cookies });
  const userName = await getCookie(COOKIE_USER_NAME, { cookies });
  if (userId && userName) redirect("/");
  return <Component />;
}
