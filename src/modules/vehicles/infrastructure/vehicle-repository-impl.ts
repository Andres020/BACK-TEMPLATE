import { VehicleDatasource, VehicleEntity, VehicleRepository } from "../domain";
import { CreateVehicleDto } from "../domain/dtos";
import { FilterDto } from "src/modules/base/domain/dtos";

export class VehicleRepositoryImpl implements VehicleRepository {
  constructor(private readonly datasource: VehicleDatasource) {}
  findById(id: string): Promise<VehicleEntity> {
    return this.datasource.findById(id);
  }
  getAll(
    params: FilterDto
  ): Promise<{ data: VehicleEntity[]; hasNextPage: boolean }> {
    return this.datasource.getAll(params);
  }
  create(dto: CreateVehicleDto): Promise<VehicleEntity> {
    return this.datasource.create(dto);
  }
  update(dto: CreateVehicleDto): Promise<VehicleEntity> {
    return this.datasource.update(dto);
  }
  delete(id: string): Promise<VehicleEntity> {
    return this.datasource.delete(id);
  }
}
