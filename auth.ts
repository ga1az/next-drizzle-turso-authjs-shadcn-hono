import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { env } from "@/env";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Resend({
      from: env.EMAIL_FROM,
    }),
  ],
  debug: env.AUTH_DEBUG,
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  trustHost: true,
});
