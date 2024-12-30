import { AbstractRepository } from "src/modules/base";
import { TemplateEntity } from "./template-entity";
import { CreateTemplateDto } from "./dtos";

export interface TemplateRepository
  extends AbstractRepository<
    TemplateEntity,
    CreateTemplateDto,
    CreateTemplateDto
  > {}
