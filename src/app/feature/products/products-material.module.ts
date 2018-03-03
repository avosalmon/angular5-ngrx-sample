import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

const modules = [
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class ProductsMaterialModule { }
