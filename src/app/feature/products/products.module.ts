import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';
import { ProductCreateComponent } from './containers/product-create/product-create.component';

@NgModule({
  imports: [
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent
  ]
})
export class ProductsModule {}
