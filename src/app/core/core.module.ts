import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CoreMaterialModule } from './core-material.module';
import { ContainerComponent } from './components/container/container.component';
import { httpInterceptorProviders } from './services/http/interceptors';
import { ProductsService } from './services/http/products.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    CoreMaterialModule
  ],
  declarations: [
    ContainerComponent
  ],
  exports: [
    ContainerComponent
  ],
  providers: [
    httpInterceptorProviders,
    ProductsService,
    NotificationService
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
