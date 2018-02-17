import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class CoreMaterialModule { }
