import { Page } from 'app/core/models/page';
import * as fromActions from '../actions';

export interface ProductsState {
  list: any[];
  page: Page;
  searchQuery: string;
  loading: boolean;
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
  searchQuery: '',
  loading: false
};

export function reducer(state = initialState, action: fromActions.ProductsAction): ProductsState {
  switch (action.type) {
    case fromActions.GET_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        list: action.payload.products,
        page: action.payload.meta,
        loading: false
      };
    }

    case fromActions.SEARCH_PRODUCTS: {
      return {
        ...state,
        searchQuery: action.query,
        loading: true
      };
    }
  }

  return state;
}
