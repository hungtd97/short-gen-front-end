"use client";

import AuthenticationProvider from "@/provider/Authentication";

export default function Template({ children }: { children: React.ReactNode }) {
  return <AuthenticationProvider>{children}</AuthenticationProvider>;
}
