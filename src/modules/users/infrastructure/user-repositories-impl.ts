import { UserDatasource, UserEntity, UserRepository } from "../domain";
import { CreateUserDto, UpdateUserDto } from "../domain/dtos";
import { FilterDto } from "src/modules/base/domain/dtos";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly datasource: UserDatasource) {}

  findByEmail(email: string): Promise<UserEntity> {
    return this.datasource.findByEmail(email);
  }
  findById(id: string): Promise<UserEntity> {
    return this.datasource.findById(id);
  }
  getAll(
    params: FilterDto
  ): Promise<{ data: UserEntity[]; hasNextPage: boolean }> {
    return this.datasource.getAll(params);
  }
  create(dto: CreateUserDto): Promise<UserEntity> {
    return this.datasource.create(dto);
  }
  update(dto: UpdateUserDto): Promise<UserEntity> {
    return this.datasource.update(dto);
  }
  delete(id: string): Promise<UserEntity> {
    return this.datasource.delete(id);
  }
}
