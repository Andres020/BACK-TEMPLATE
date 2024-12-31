import { FilterDto } from "./dtos";

export abstract class AbstractDatasource<T, CreateDto, UpdateDto> {
  abstract findById(id: string): Promise<T>;
  abstract getAll(
    params: FilterDto
  ): Promise<{ data: T[]; hasNextPage: boolean }>;
  abstract create(dto: CreateDto): Promise<T>;
  abstract update(dto: UpdateDto): Promise<T>;
  abstract delete(id: string): Promise<T>;
}
