import { UserModel } from "src/data/models";
import { UserDatasource, UserEntity } from "../domain";
import { CreateUserDto, UpdateUserDto } from "../domain/dtos";
import { IUser } from "../../../data/models/User";
import { BaseDatasourceMongooseImpl } from "src/modules/base/infrastructure";
import { CustomError } from "src/modules/errors";
import { LoginUserDto } from "../domain/dtos/login-user-dto";
import { bcryptAdapter } from "@config/bcrypt";
import { JwtAdapter } from "@config/jwt";
import { FilterDto } from "src/modules/base/domain/dtos";

export class UserDatasourceImpl
  extends BaseDatasourceMongooseImpl<
    IUser,
    UserEntity,
    CreateUserDto,
    UpdateUserDto
  >
  implements UserDatasource
{
  constructor() {
    super(UserModel, UserEntity.fromObject);
  }


  async login(dto: LoginUserDto): Promise<{ data: UserEntity; token: string }> {
    const exitsUser = await this.findOne({ email: dto.email });
    if (!exitsUser)
      throw CustomError.badRequest("Password or email is incorrect");

    const isMatch = bcryptAdapter.compare(dto.password, exitsUser.password);
    if (!isMatch)
      throw CustomError.badRequest("Password or email is incorrect");

    const token = await JwtAdapter.generateToken({ id: exitsUser.id });
    if (!token) throw CustomError.internal("Error generating token");

    const loggedUser = {
      data: exitsUser,
      token,
    };

    return loggedUser;
  }

  override async create(createDto: CreateUserDto): Promise<UserEntity> {
    const exitsUser = await this.findOne({ email: createDto.email });
    if (exitsUser) throw CustomError.badRequest("User already exists");

    try {
      const user = await super.register(createDto);

      const { password, ...rest } = user;
      const a = {
        data: rest,
        token: "ava",
      };
      return user;
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }

  async findByEmail(email: string): Promise<UserEntity> {
    try {
      const user = this.findOne({ email });
      if (!!user) throw new Error("User not found");
      return user;
    } catch (error) {
      throw error;
    }
  }
}
