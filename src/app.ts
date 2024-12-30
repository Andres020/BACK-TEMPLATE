import { envs } from "@config/index";
import { Server, AppRoutes } from "@app/index";
import { MongoDatabase } from "./data/mongo/mongo-database";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });
  const server = new Server({
    port: Number(envs.PORT),
    routes: AppRoutes.routes,
  });

  server.start();
}
