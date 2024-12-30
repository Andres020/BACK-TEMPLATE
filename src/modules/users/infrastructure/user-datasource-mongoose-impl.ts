// TODO: UPDATE PATH
import { UserModel } from "src/data/models";
import { UserDatasource, UserEntity } from "../domain";
import { CreateUserDto, UpdateUserDto } from "../domain/dtos";
import { CustomError } from "src/modules/errors";
import { BaseDatasourceMongooseImpl } from "src/modules/base";
import { IUser } from "../../../data/models/User";

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
  async findAll(): Promise<UserEntity[]> {
    try {
      const users = UserModel.find().exec();
      return users.then((users) => users.map(UserEntity.fromObject));
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }

  update(user: UpdateUserDto): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }

  async findByEmail(email: string): Promise<UserEntity> {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) throw new Error("User not found");
      return UserEntity.fromObject(user);
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }
}
