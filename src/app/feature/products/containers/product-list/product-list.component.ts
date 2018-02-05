import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products$: Observable<any[]>;
}
