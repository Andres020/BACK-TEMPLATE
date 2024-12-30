import { UserEntity, UserRepository, UserDatasource } from "../domain";
import { CreateUserDto, UpdateUserDto } from "../domain/dtos";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly datasource: UserDatasource) {}
  findAll(): Promise<UserEntity[]> {
    return this.datasource.findAll();
  }

  findById(id: string): Promise<UserEntity> {
    return this.datasource.findById(id);
  }
  findByEmail(email: string): Promise<UserEntity> {
    return this.datasource.findByEmail(email);
  }
  create(user: CreateUserDto): Promise<UserEntity> {
    return this.datasource.create(user);
  }
  update(user: UpdateUserDto): Promise<UserEntity> {
    return this.datasource.update(user);
  }
  delete(id: string): Promise<UserEntity> {
    return this.datasource.delete(id);
  }
}
