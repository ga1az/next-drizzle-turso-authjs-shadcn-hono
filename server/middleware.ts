import { Context, Next } from "hono";
import { auth } from "@/auth";

export async function middlewareOrigin(c: Context, next: Next) {
  if (c.req.method === "GET") {
    return next();
  }

  const originHeader = c.req.header("Origin");

  const hostHeader = c.req.header("Host");

  if (!originHeader || !hostHeader) {
    return c.body(null, 403);
  }

  return await next();
}

export async function middlewareAuth(c: Context, next: Next) {
  const isAuthenticated = await auth();

  if (!isAuthenticated) {
    return c.body("Not auth", 401);
  }

  return await next();
}
