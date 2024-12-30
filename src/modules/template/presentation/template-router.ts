import { Router } from "express";
import { TemplateDatasourceImpl } from "../infrastructure/template-datasource-mongoose-impl";
import { TemplateRepositoryImpl } from "../infrastructure/template-repository-impl";
import { TemplateController } from "./template-controller";

export class TemplateRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new TemplateDatasourceImpl();
    const templateRepository = new TemplateRepositoryImpl(datasource);
    const templateController = new TemplateController(templateRepository);

    router.post("/", templateController.create);
    router.get("/:id", templateController.findById);
    router.delete("/:id", templateController.delete);
    router.put("/:id", templateController.update);

    return router;
  }
}
