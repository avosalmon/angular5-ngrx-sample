import { Pagination } from 'app/core/models/pagination';
import * as fromActions from '../actions';

export interface ProductsState {
  list: any[];
  pagination: Pagination;
  searchQuery: string;
}

export const initialState: ProductsState = {
  list: [],
  pagination: {
    limit: 50,
    offset: 0,
    sort: 'id',
    direction: 'desc',
    total: 0
  },
  searchQuery: ''
};

export function reducer(state = initialState, action: fromActions.ProductsAction): ProductsState {
  switch (action.type) {
    case fromActions.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        list: action.payload.products,
        pagination: action.payload.meta
      };
    }

    case fromActions.SEARCH_PRODUCTS: {
      return {
        ...state,
        searchQuery: action.query
      };
    }
  }

  return state;
}
