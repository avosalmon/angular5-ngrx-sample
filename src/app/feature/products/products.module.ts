import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductsMaterialModule } from './products-material.module';
import { ProductsRoutingModule } from './products-routing.module';

import { reducer, effects } from './store';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';
import { ProductCreateComponent } from './containers/product-create/product-create.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsMaterialModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent
  ]
})
export class ProductsModule {}
