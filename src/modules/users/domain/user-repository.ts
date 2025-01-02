import { AbstractRepository } from "src/modules/base/domain";
import { CreateUserDto, UpdateUserDto } from "./dtos";
import { UserEntity } from "./user-entity";
import { LoginUserDto } from "./dtos/login-user-dto";

export interface UserRepository
  extends AbstractRepository<UserEntity, CreateUserDto, UpdateUserDto> {
  login(dto: LoginUserDto): Promise<{ data: UserEntity; token: string }>;
  findByEmail(email: string): Promise<UserEntity>;
  // register(createUserDto: CreateUserDto): Promise<UserEntity>;
}
