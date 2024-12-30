// TODO: UPDATE PATH
import { UserDatasource, UserEntity } from "../domain";
import { CreateUserDto, UpdateUserDto } from "../domain/dtos";

export class UserDatasourcePostgreImpl implements UserDatasource {
  findAll(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  async findByEmail(email: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  async create(user: CreateUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  async update(user: UpdateUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
}
