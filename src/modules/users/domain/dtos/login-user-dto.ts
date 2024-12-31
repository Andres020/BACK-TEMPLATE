export class LoginUserDto {
  private constructor(public email: string, public password: string) {}

  static create(props: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = props;

    if (!email) return ["Email is required"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return ["Invalid email format"];

    if (!password) return ["Password is required"];

    return [undefined, new LoginUserDto(email, password)];
  }
}
