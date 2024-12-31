import { TemplateEntity } from "./template-entity";
import { CreateTemplateDto } from "./dtos";
import { AbstractRepository } from "src/modules/base/domain";

export interface TemplateRepository
  extends AbstractRepository<
    TemplateEntity,
    CreateTemplateDto,
    CreateTemplateDto
  > {}
