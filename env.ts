import { createEnv } from "@t3-oss/env-nextjs";
import { boolean } from "boolean";
import { z } from "zod";

const zParsedBoolean = z
  .string()
  .transform((v) => boolean(v))
  .optional()
  .default("false");

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    DATABASE_AUTH_TOKEN: z.string().optional(),
    DATABASE_DEBUG: zParsedBoolean,
    AUTH_SECRET: z.string().optional().default(""),
    AUTH_GOOGLE_ID: z.string(),
    AUTH_GOOGLE_SECRET: z.string(),
    AUTH_DEBUG: zParsedBoolean,
    RESEND_API_KEY: z.string().min(1),
    AUTH_RESEND_KEY: z.string().min(1),
    EMAIL_FROM: z.string().email(),
  },
  client: {
    NEXT_PUBLIC_DOMAIN: z.string(),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  },
});
