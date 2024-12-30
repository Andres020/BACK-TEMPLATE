export class TemplateEntity {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static fromObject(object: { [key: string]: any }) {
    const { id, _id, name } = object;

    if (!id && !_id) throw new Error("Missing id");
    if (!name) throw new Error("Missing name");

    return new TemplateEntity(id || _id, name);
  }
}
