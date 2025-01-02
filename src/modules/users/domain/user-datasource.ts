import { AbstractDatasource } from "src/modules/base/domain";
import { UserEntity } from "./user-entity";
import { CreateUserDto, UpdateUserDto } from "./dtos";
import { LoginUserDto } from "./dtos/login-user-dto";

export interface UserDatasource
  extends AbstractDatasource<UserEntity, CreateUserDto, UpdateUserDto> {
  findByEmail(email: string): Promise<UserEntity>;
  login(dto: LoginUserDto): Promise<{ data: UserEntity; token: string }>;
  // register(createUserDto: CreateUserDto): Promise<UserEntity>;
}
