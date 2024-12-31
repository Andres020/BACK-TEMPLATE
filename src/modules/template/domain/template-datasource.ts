import { TemplateEntity } from "./template-entity";
import { CreateTemplateDto } from "./dtos";
import { AbstractDatasource } from "src/modules/base/domain";

export interface TemplateDatasource
  extends AbstractDatasource<
    TemplateEntity,
    CreateTemplateDto,
    CreateTemplateDto
  > {}
