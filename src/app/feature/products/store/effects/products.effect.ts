import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ProductsService, ProductsResponse } from 'app/core/services/http/products.service';
import * as fromActions from '../actions';

const relationships = 'supplier,sales';
const fields = 'id,supplier_id,image_uri,product_name,model_number,public_stock,min_lot,min_stock,order_unit';

@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$ = this.actions$.ofType(fromActions.GET_PRODUCTS).pipe(
    switchMap(() => {
      return this.productsService
        .all(null, fields)
        .pipe(
          map((response: ProductsResponse) =>
            new fromActions.GetProductsSuccess(response.data)
          )
        );
    })
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }
}
