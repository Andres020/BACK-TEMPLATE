import { envs } from "@config/index";
import { Server, AppRoutes } from "@app/index";

(async () => {
  main();
})();

async function main() {
  
    const server = new Server({
        port: Number(envs.PORT),
        routes: AppRoutes.routes,
    })

    server.start();
}
