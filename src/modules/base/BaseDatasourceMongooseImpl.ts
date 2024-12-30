import { Model, Document } from "mongoose";
import { CustomError } from "src/modules/errors";
import { AbstractRepository } from "./BaseRepository";
// import { GetAllParams } from "./params";

export class BaseDatasourceMongooseImpl<
  M extends Document,
  E,
  CreateDto,
  UpdateDto
> extends AbstractRepository<E, CreateDto, UpdateDto> {
  constructor(private model: Model<M>, private entityFactory: (model: M) => E) {
    super();
  }

  async findById(id: string): Promise<E> {
    try {
      const document = await this.model.findById(id);
      if (!document) throw new Error("Document not found");
      return this.entityFactory(document);
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }

  // TODO: Add pagination
  async getAll(params?: any): Promise<E[]> {
    try {
      const query = this.model.find(params?.filter || {});
      if (params?.pagination) {
        query
          .skip((params.pagination.page - 1) * params.pagination.limit)
          .limit(params.pagination.limit);
      }
      if (params?.sort) {
        query.sort({
          [params.sort.field]: params.sort.order === "asc" ? 1 : -1,
        });
      }
      const documents = await query.exec();
      return documents.map(this.entityFactory);
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }

  async create(createDto: CreateDto): Promise<E> {
    try {
      const document = new this.model(createDto);
      await document.save();
      return this.entityFactory(document);
    } catch (error) {
      console.log(error)
      throw CustomError.internal(`${error}`);
    }
  }

  async update(updateDto: UpdateDto): Promise<E> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<E> {
    try {
      const document = await this.model.findByIdAndDelete(id);
      if (!document) throw new Error("Document not found");
      return this.entityFactory(document);
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }
}
