import { VehicleEntity } from "./vehicles-entity";
import { CreateVehicleDto } from "./dtos";
import { AbstractRepository } from "src/modules/base/domain";

export interface VehicleRepository
  extends AbstractRepository<
    VehicleEntity,
    CreateVehicleDto,
    CreateVehicleDto
  > {}
