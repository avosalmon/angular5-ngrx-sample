import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    const url = '/products/?' + this.formatParameters(pagination, fields);
    return this.http.get<ProductsResponse>(url);
  }

  /**
   * Format url params with pagination and fields.
   *
   * @param pagination
   * @param fields
   */
  private formatParameters(pagination: Pagination, fields: string): string {
    pagination = pagination || this.defaultPagination;

    let params = '';
    params += 'limit=' + encodeURIComponent(String(pagination.limit));
    params += '&offset=' + encodeURIComponent(String(pagination.offset));
    params += '&sort=' + encodeURIComponent(pagination.sort);
    params += '&direction=' + encodeURIComponent(pagination.direction);

    if (fields) {
      params += '&fields=' + encodeURIComponent(fields);
    }

    return params;
  }
}

export interface ProductsResponse {
  products: any[];
  meta: Pagination;
  schema: any;
}
