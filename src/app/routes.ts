import { Router } from "express";
import { TemplateRoutes } from "src/modules/template/presentation";
import { UserRoutes } from "src/modules/users/presentation/user-router";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.get("/", (req, res) => {
      res.send("Hello World");
    });

    router.use("/users", UserRoutes.routes);
    router.use("/template", TemplateRoutes.routes);
    return router;
  }
}
