export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(id: string, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static fromObject(object: { [key: string]: any }) {
    const { id, _id, name, email, password } = object;

    if (!id && !_id) throw new Error("Missing  id");
    if (!name) throw new Error("Missing  name");
    if (!email) throw new Error("Missing email");
    if (!password) throw new Error("Missing password");

    return new UserEntity(id, name, email, password);
  }
}
