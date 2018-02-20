import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<any[]>;

  constructor(private store: Store<fromStore.ProductsState>) {
    this.products$ = this.store.pipe(select(fromStore.getAllProducts));
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.GetProducts());
  }
}
