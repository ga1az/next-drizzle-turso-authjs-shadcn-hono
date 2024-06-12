import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { middlewareOrigin } from "./middleware";
import { v1 } from "./v1";

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use("*", cors());
app.use("*", middlewareOrigin);

const routes = app.route("/v1", v1);

export type AppType = typeof routes;

export default app;
