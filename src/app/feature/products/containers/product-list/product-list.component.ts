import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, PageEvent } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Page } from 'app/core/models/page';
import * as fromStore from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements AfterViewInit {

  displayedColumns = ['id', 'product_name', 'model_number', 'price', 'public_stock', 'action'];

  products$: Observable<any[]>;
  page$: Observable<Page>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<fromStore.ProductsState>) {
    this.products$ = this.store.pipe(select(fromStore.getAllProducts));
    this.page$     = this.store.pipe(select(fromStore.getPage));
  }

  ngAfterViewInit(): void {
    // ViewChild is initialized here.
    this.getProducts();
  }

  onSortChange(): void {
    this.paginator.pageIndex = 0;
    this.getProducts();
  }

  onPageChange(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.store.dispatch(new fromStore.GetProducts(
      this.paginator.pageSize,
      this.paginator.pageSize * this.paginator.pageIndex,
      this.sort.active,
      this.sort.direction
    ));
  }
}
