export abstract class AbstractRepository<T, CreateDto, UpdateDto> {
    abstract findById(id: string): Promise<T>;
    // TODO: Add pagination
    abstract getAll(params?: any): Promise<T[]>;
  
    abstract create(dto: CreateDto): Promise<T>;
    abstract update(dto: UpdateDto): Promise<T>;
    abstract delete(id: string): Promise<T>;
  }