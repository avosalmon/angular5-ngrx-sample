import { Page } from 'app/core/models/page';
import * as fromActions from '../actions';

export interface ProductsState {
  list: any[];
  page: Page;
  searchQuery: string;
}

export const initialState: ProductsState = {
  list: [],
  page: {
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
        page: action.payload.meta
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
