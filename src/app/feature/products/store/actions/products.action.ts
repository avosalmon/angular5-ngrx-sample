import { Action } from '@ngrx/store';
import { Page } from 'app/core/models/page';

export const GET_PRODUCTS = '[Products] Get Products';
export const GET_PRODUCTS_SUCCESS = '[Products] Get Products Success';
export const SEARCH_PRODUCTS = '[Products] Search Products';
export const SEARCH_PRODUCTS_SUCCESS = '[Products] Search Products Success';

export class GetProducts implements Action {
  readonly type = GET_PRODUCTS;
  readonly payload: Page;

  constructor(limit: number, offset: number, sort: string, direction: string, total = 0) {
    this.payload = {
      limit: limit,
      offset: offset,
      sort: sort,
      direction: direction,
      total: total
    };
  }
}

export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public payload: any) { }
}

export class SearchProducts implements Action {
  readonly type = SEARCH_PRODUCTS;
  constructor(public query: string) { }
}

export class SearchProductsSuccess implements Action {
  readonly type = SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: any) { }
}

// action types
export type ProductsAction =
  | GetProducts
  | GetProductsSuccess
  | SearchProducts
  | SearchProductsSuccess;
