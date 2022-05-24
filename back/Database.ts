import { Database, PostgresConnector, Relationships } from "denodb";
import Item from "./Models/Item.ts";
import List from "./Models/List.ts";
  
const connector = new PostgresConnector({
  database: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
});

const db = new Database(connector, true);
Relationships.belongsTo(Item, List);
db.link([List, Item]);
await db.sync();


