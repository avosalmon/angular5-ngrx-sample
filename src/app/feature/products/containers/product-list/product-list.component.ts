import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, MatSort } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';

import { Page } from 'app/core/models/page';
import * as fromStore from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements AfterViewInit {

  displayedColumns = [
    'id', 'image_uri', 'product_name', 'model_number', 'public_stock', 'min_lot', 'min_stock', 'order_unit', 'action'
  ];

  searchQuery: FormControl;

  products$: Observable<any[]>;
  page$: Observable<Page>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private store: Store<fromStore.ProductsState>) {
    this.products$ = this.store.pipe(select(fromStore.getAllProducts));
    this.page$     = this.store.pipe(select(fromStore.getPage));

    this.initSearchQuery();
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

  private getProducts(): void {
    this.store.dispatch(new fromStore.GetProducts(
      this.paginator.pageSize,
      this.paginator.pageSize * this.paginator.pageIndex,
      this.sort.active,
      this.sort.direction
    ));
  }

  private searchProducts(): void {

  }

  private initSearchQuery(): void {
    this.searchQuery = new FormControl();
    this.searchQuery.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((query: string) => {
      // dispatch search products action
    });
  }
}
