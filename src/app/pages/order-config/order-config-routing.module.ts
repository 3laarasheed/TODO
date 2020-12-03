import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderConfigPage } from './order-config.page';

const routes: Routes = [
  {
    path: '',
    component: OrderConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderConfigPageRoutingModule {}
