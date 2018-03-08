import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Page } from '../../models/page';
import { ApiResponse } from 'app/core/models/api-response';

@Injectable()
export class ProductsService {
  private defaultPage: Page = {
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
   * @param page
   * @param fields
   */
  all(page?: Page, fields?: string): Observable<ProductsResponse> {
    const params = this.formatParams(page, fields);
    return this.http.get<ApiResponse<ProductsResponse>>('/products', { params: params })
                    .pipe(
                      map(response => response.data)
                    );
  }

  search(query: string, page?: Page, fields?: string): Observable<ProductsResponse> {
    const params = this.formatParams(page, fields, query);
    return this.http.get<ApiResponse<ProductsResponse>>('/products/search', { params: params })
                    .pipe(
                      map(response => response.data)
                    );
  }

  /**
   * Format http params.
   *
   * @param page
   * @param fields
   * @param query
   */
  private formatParams(page?: Page, fields?: string, query?: string): any {
    page = page || this.defaultPage;

    const params: any = {
      limit: page.limit,
      offset: page.offset,
      sort: page.sort,
      direction: page.direction
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
  meta: Page;
  schema: any;
}
