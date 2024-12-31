import { IVehicle, VehicleModel } from "src/data/models/Vehicle";
import { VehicleDatasource, VehicleEntity } from "../domain";
import { CreateVehicleDto } from "../domain/dtos";
import { BaseDatasourceMongooseImpl } from "src/modules/base/infrastructure";

export class VehicleDatasourceImpl
  extends BaseDatasourceMongooseImpl<
    IVehicle,
    VehicleEntity,
    CreateVehicleDto,
    CreateVehicleDto
  >
  implements VehicleDatasource
{
  constructor() {
    super(VehicleModel, VehicleEntity.fromObject);
  }
}
