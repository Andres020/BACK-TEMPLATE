export interface PaginationParams {
  page: number;
  limit: number;
}

export interface SortParams {
  field: string;
  order: "asc" | "desc";
}

export class FilterDto {
  private constructor(
    public filters: { [key: string]: any },
    public pagination: PaginationParams,
    public sort: SortParams
  ) {}

  static create(props: { [key: string]: any }): FilterDto {
    const { filters, pagination, sort } = props;

    const defaultPagination: PaginationParams = {
      page: 1,
      limit: 10,
    };

    const paginationParams: PaginationParams = pagination || defaultPagination;

    const defaultSort: SortParams = {
      field: "createdAt",
      order: "desc",
    };

    const sortParams: SortParams = sort || defaultSort;

    return new FilterDto(filters, paginationParams, sortParams);
  }
}
