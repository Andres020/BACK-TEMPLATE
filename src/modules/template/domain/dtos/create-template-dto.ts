export class CreateTemplateDto {
  private constructor(public name: string) {}

  static create(props: { [key: string]: any }): [string?, CreateTemplateDto?] {
    const { name } = props;
    if (!name) return ["name is required"];
    return [undefined, new CreateTemplateDto(name)];
  }
}
