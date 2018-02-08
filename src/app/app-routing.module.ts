import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './core/components/container/container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContainerComponent,
    children: [
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
    ]
  },
  {
    path: 'login',
    loadChildren: 'app/feature/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
