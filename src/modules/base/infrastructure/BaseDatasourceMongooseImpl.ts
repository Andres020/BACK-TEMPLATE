import { Model, Document, RootFilterQuery } from "mongoose";
import { CustomError } from "src/modules/errors";
import { FilterDto } from "../domain/dtos";
import { AbstractRepository } from "../domain";
import { bcryptAdapter } from "@config/bcrypt";

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
      if (!document) throw CustomError.notFound("Document not found");
      return this.entityFactory(document);
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }

  async getAll(
    params: FilterDto
  ): Promise<{ data: E[]; hasNextPage: boolean }> {
    try {
      const query = this.model.find(
        (params?.filters as RootFilterQuery<M>) || {}
      );
      if (params?.pagination) {
        query
          .skip((params.pagination.page - 1) * params.pagination.limit)
          .limit(params.pagination.limit + 1); // Fetch one extra document to check for next page
      }
      if (params?.sort) {
        query.sort({
          [params.sort.field]: params.sort.order === "asc" ? 1 : -1,
        });
      }
      const documents = await query.exec();
      const hasNextPage = documents.length > (params.pagination?.limit || 0);
      if (hasNextPage) {
        documents.pop(); // Remove the extra document
      }
      return { data: documents.map(this.entityFactory), hasNextPage };
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
      throw CustomError.internal(`${error}`);
    }
  }

  async update(updateDto: UpdateDto): Promise<E> {
    throw CustomError.internal("Method not implemented.");
  }

  async delete(id: string): Promise<E> {
    try {
      const document = await this.model.findByIdAndDelete(id);
      if (!document) throw CustomError.notFound("Document not found");
      return this.entityFactory(document);
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }

  async findOne(filter: { [key: string]: any }): Promise<E | null> {
    try {
      const document = await this.model.findOne(filter as RootFilterQuery<M>);
      if (!document) return null;
      return this.entityFactory(document);
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }

  async count(filter: { [key: string]: any }): Promise<number> {
    try {
      return await this.model.countDocuments(filter as RootFilterQuery<M>);
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }

  async register(createDto: CreateDto): Promise<E> {
    try {
      const document = new this.model(createDto);
      (document as any).password = bcryptAdapter.hash((createDto as any).password);
      await document.save();
      return this.entityFactory(document);
    } catch (error) {
      throw CustomError.internal(`${error}`);
    }
  }
}
