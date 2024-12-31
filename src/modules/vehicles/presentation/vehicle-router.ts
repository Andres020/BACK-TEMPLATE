import { Router } from "express";
import { VehicleDatasourceImpl } from "../infrastructure/vehicle-datasource-mongoose-impl";
import { VehicleRepositoryImpl } from "../infrastructure/vehicle-repository-impl";
import { VehicleController } from "./vehicle-controller";

export class VehicleRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new VehicleDatasourceImpl();
    const vehicleRepository = new VehicleRepositoryImpl(datasource);
    const vehicleController = new VehicleController(vehicleRepository);

    router.post("/", vehicleController.create);
    router.get("/:id", vehicleController.findById);
    router.post("/filter", vehicleController.getAll);
    router.delete("/:id", vehicleController.delete);
    router.put("/:id", vehicleController.update);

    return router;
  }
}
