import { VehicleEntity } from "./vehicles-entity";
import { CreateVehicleDto } from "./dtos";
import { AbstractDatasource } from "src/modules/base/domain";

export interface VehicleDatasource
  extends AbstractDatasource<
    VehicleEntity,
    CreateVehicleDto,
    CreateVehicleDto
  > {
    
  }
