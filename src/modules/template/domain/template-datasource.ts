import { AbstractDatasource } from "src/modules/base";
import { TemplateEntity } from "./template-entity";
import { CreateTemplateDto } from "./dtos";

export interface TemplateDatasource
  extends AbstractDatasource<
    TemplateEntity,
    CreateTemplateDto,
    CreateTemplateDto
  > {}
