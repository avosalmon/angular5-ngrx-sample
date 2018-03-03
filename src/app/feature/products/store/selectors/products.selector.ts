import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromReducers from '../reducers';

export const getProductsState = createFeatureSelector<fromReducers.ProductsState>(
  'products'
);

export const getAllProducts = createSelector(
  getProductsState,
  (state: fromReducers.ProductsState) => state.list
);

export const getPage = createSelector(
  getProductsState,
  (state: fromReducers.ProductsState) => state.pagination
);
