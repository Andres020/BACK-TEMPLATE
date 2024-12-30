import { CreateUserDto, UpdateUserDto } from "./dtos";
import { UserEntity } from "./user-entity";

export interface UserRepository {
  findById(id: string): Promise<UserEntity>;
  findAll(): Promise<UserEntity[]>;
  findByEmail(email: string): Promise<UserEntity>;

  create(user: CreateUserDto): Promise<UserEntity>;
  update(user: UpdateUserDto): Promise<UserEntity>;
  delete(id: string): Promise<UserEntity>;
}
