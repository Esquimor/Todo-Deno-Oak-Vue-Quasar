import App from "./App.ts";
import HomeRouter from "./Router/HomeRouter.ts";
import ListRouter from "./Router/ListRouter.ts";
import db from "./Database.ts";
import ItemRouter from "./Router/ItemRouter.ts";

const routers = [
  new HomeRouter(),
  new ListRouter(),
  new ItemRouter(),
]

const { app, port } = new App({ port: 8080, routers: routers });
 
await app.listen({ port });

await db.close();