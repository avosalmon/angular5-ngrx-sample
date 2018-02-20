import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Pagination } from '../../models/pagination';

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
    return this.http.get<ProductsResponse>('/products', { params: params });
  }

  /**
   * Format http params with pagination and fields.
   *
   * @param pagination
   * @param fields
   */
  private formatParams(pagination?: Pagination, fields?: string): HttpParams {
    pagination = pagination || this.defaultPagination;

    const params = new HttpParams();
    params.append('limit', pagination.limit.toString());
    params.append('offset', pagination.offset.toString());
    params.append('sort', pagination.sort);
    params.append('direction', pagination.direction);

    if (fields) {
      params.append('fields', encodeURIComponent(fields));
    }

    return params;
  }
}

export interface ProductsResponse {
  status: string;
  message: string;
  data: {
    products: any[];
    meta: Pagination;
    schema: any;
  };
}
