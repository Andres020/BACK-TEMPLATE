import { AbstractRepository } from "src/modules/base/domain";
import { CreateUserDto, UpdateUserDto } from "./dtos";
import { UserEntity } from "./user-entity";

export interface UserRepository
  extends AbstractRepository<UserEntity, CreateUserDto, UpdateUserDto> {
  findByEmail(email: string): Promise<UserEntity>;
  // register(createUserDto: CreateUserDto): Promise<UserEntity>;
  // login(dto: LoginUserDto): Promise<{ data: UserEntity; token: string }>;
}
