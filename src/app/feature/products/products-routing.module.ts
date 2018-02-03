import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductCreateComponent } from './containers/product-create/product-create.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'create', component: ProductCreateComponent },
      { path: 'edit/:id', component: ProductEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
