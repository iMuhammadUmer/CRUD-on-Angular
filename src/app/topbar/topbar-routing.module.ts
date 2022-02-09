import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddProductComponent} from '../products/add-product/add-product.component';
import {ViewProductsComponent} from '../products/view-products/view-products.component';

const routes: Routes = [
  {
    path: 'addProduct',
    component: AddProductComponent
  },
  {
    path: 'viewProducts',
    component: ViewProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopbarRoutingModule { }
