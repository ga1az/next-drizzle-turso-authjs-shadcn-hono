import { Hono } from "hono";
import { middlewareAuth } from "../middleware";

export const v1 = new Hono()
  .get("/test", async (c) => {
    return c.json({ success: "User registered successfully" }, 200);
  })
  .use(middlewareAuth)
  .get("/test2", async (c) => {
    return c.json({ success: "User registered successfully watafak" }, 200);
  });
