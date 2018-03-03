import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ProductsService, ProductsResponse } from 'app/core/services/http/products.service';
import * as fromActions from '../actions';

const relationships = 'supplier,sales';
const fields = 'id,supplier_id,image_uri,product_name,model_number,public_stock,min_lot,min_stock,order_unit';

@Injectable()
export class ProductsEffects {

  @Effect()
  getProducts$ = this.actions$.pipe(
    ofType<fromActions.GetProducts>(fromActions.GET_PRODUCTS),
    switchMap(() => {
      return this.productsService.all(null, fields)
        .pipe(
          map((response: ProductsResponse) =>
            new fromActions.GetProductsSuccess(response)
          )
        );
    })
  );

  @Effect()
  searchProducts$ = this.actions$.pipe(
    ofType<fromActions.SearchProducts>(fromActions.SEARCH_PRODUCTS),
    switchMap(action => {
      return this.productsService.search(action.query, null, fields)
        .pipe(
          map((response: ProductsResponse) =>
            new fromActions.GetProductsSuccess(response)
          )
        );
    })
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }
}
