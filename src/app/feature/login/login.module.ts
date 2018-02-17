import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginMaterialModule } from './login-material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './containers/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginMaterialModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
