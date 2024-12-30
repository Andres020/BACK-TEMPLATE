import {
  TemplateDatasource,
  TemplateEntity,
  TemplateRepository,
} from "../domain";
import { CreateTemplateDto } from "../domain/dtos";

export class TemplateRepositoryImpl implements TemplateRepository {
  constructor(private readonly datasource: TemplateDatasource) {}

  findById(id: string): Promise<TemplateEntity> {
    return this.datasource.findById(id);
  }
  getAll(params?: any): Promise<TemplateEntity[]> {
    return this.datasource.getAll(params);
  }
  create(dto: CreateTemplateDto): Promise<TemplateEntity> {
    return this.datasource.create(dto);
  }
  update(dto: CreateTemplateDto): Promise<TemplateEntity> {
    return this.datasource.update(dto);
  }
  delete(id: string): Promise<TemplateEntity> {
    return this.datasource.delete(id);
  }
}
