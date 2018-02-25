import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginMaterialModule } from './login-material.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './containers/login-form/login-form.component';
import { LoginService } from './services/http/login.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    LoginMaterialModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
