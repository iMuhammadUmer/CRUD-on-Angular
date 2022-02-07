import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';



@NgModule({
  declarations: [
    AddProductComponent,
    ViewProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
