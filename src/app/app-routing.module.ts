import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  // Lazy loaded routes
  {
    path: 'products',
    loadChildren: 'app/feature/products/products.module#ProductsModule'
  },
  // {
  //   path: "suppliers",
  //   loadChildren: "app/feature/supplier/supplier.module#SupplierModule"
  // },
  // {
  //   path: "purchase-orders",
  //   loadChildren:
  //     "app/feature/purchase-order/purchase-order.module#PurchaseOrderModule"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
