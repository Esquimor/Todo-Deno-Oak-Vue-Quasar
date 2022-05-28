import App from "./App.ts";
import HomeRouter from "./Router/HomeRouter.ts";
import ListRouter from "./Router/ListRouter.ts";
import db from "./Database.ts";

const routers = [
  new HomeRouter(),
  new ListRouter(),
]

const { app, port } = new App({ port: 8080, routers: routers });
 
await app.listen({ port });

await db.close();