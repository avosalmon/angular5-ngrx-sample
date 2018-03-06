import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Pagination } from 'app/core/models/pagination';
import * as fromStore from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  displayedColumns = ['id', 'product-name', 'model-number', 'price', 'public-stock'];

  products$: Observable<any[]>;
  page$: Observable<Pagination>;

  constructor(private store: Store<fromStore.ProductsState>) {
    this.products$ = this.store.pipe(select(fromStore.getAllProducts));
    this.page$     = this.store.pipe(select(fromStore.getPage));
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.GetProducts);
  }
}
