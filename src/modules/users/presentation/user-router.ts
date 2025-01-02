import { Router } from "express";
import { UserDatasourceImpl } from "../infrastructure/user-datasource-mongoose-impl";
import { UserRepositoryImpl } from "../infrastructure/user-repositories-impl";
import { UserController } from "./user-controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new UserDatasourceImpl();
    const userRepository = new UserRepositoryImpl(datasource);
    const userController = new UserController(userRepository);

    router.get("/:id", userController.findById);
    router.get("/email/:email", userController.findByEmail);
    router.get("/", userController.getAll);
    router.post("/", userController.create);
    router.post("/login", userController.login);
    router.put("/", userController.update);
    router.delete("/:id", userController.delete);

    return router;
  }
}
