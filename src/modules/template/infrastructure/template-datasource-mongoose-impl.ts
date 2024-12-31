import { ITemplate, TemplateModel } from "src/data/models/Template";
import { TemplateDatasource, TemplateEntity } from "../domain";
import { CreateTemplateDto } from "../domain/dtos";
import { BaseDatasourceMongooseImpl } from "src/modules/base/infrastructure";

export class TemplateDatasourceImpl
  extends BaseDatasourceMongooseImpl<
    ITemplate,
    TemplateEntity,
    CreateTemplateDto,
    CreateTemplateDto
  >
  implements TemplateDatasource
{
  constructor() {
    super(TemplateModel, TemplateEntity.fromObject);
  }
}
