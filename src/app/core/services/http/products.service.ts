import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Pagination } from '../../models/pagination';
import { ApiResponse } from 'app/core/models/api-response';

@Injectable()
export class ProductsService {
  private defaultPagination: Pagination = {
    limit: 50,
    offset: 0,
    sort: 'id',
    direction: 'desc',
    total: 0
  };

  constructor(private http: HttpClient) {}

  /**
   * Get list of products.
   *
   * @param pagination
   * @param fields
   */
  all(pagination?: Pagination, fields?: string): Observable<ProductsResponse> {
    const params = this.formatParams(pagination, fields);
    return this.http.get<ApiResponse<ProductsResponse>>('/products', { params: params })
                    .pipe(
                      map(response => response.data)
                    );
  }

  search(query: string, pagination?: Pagination, fields?: string): Observable<ProductsResponse> {
    const params = this.formatParams(pagination, fields, query);
    return this.http.get<ApiResponse<ProductsResponse>>('/products/search', { params: params })
                    .pipe(
                      map(response => response.data)
                    );
  }

  /**
   * Format http params with pagination and fields.
   *
   * @param pagination
   * @param fields
   * @param query
   */
  private formatParams(pagination?: Pagination, fields?: string, query?: string): any {
    pagination = pagination || this.defaultPagination;

    const params: any = {
      limit: pagination.limit,
      offset: pagination.offset,
      sort: pagination.sort,
      direction: pagination.direction
    };

    if (fields) {
      params.fields = fields;
    }

    if (query) {
      params.q = query;
    }

    return params;
  }
}

export interface ProductsResponse {
  products: any[];
  meta: Pagination;
  schema: any;
}
