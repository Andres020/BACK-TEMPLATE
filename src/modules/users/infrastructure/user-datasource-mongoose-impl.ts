import { UserModel } from "src/data/models";
import { UserDatasource, UserEntity } from "../domain";
import { CreateUserDto, UpdateUserDto } from "../domain/dtos";
import { IUser } from "../../../data/models/User";
import { BaseDatasourceMongooseImpl } from "src/modules/base/infrastructure";

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
  async findByEmail(email: string): Promise<UserEntity> {
    try {
      const user = this.findOne({ email });

      if (!user) throw new Error("User not found");
      return user;
    } catch (error) {
      throw error;
    }
  }
}
