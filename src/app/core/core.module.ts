import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { httpInterceptorProviders } from './services/http/interceptors/index';
import { ProductsService } from './services/http/products.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders,
    ProductsService
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
