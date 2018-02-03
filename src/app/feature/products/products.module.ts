import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './containers/product-list/product-list.component';

@NgModule({
  imports: [
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
  ],
  providers: []
})
export class ProductsModule {}
