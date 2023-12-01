import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MidelPage } from './midel.page';

const routes: Routes = [
  {
    path: '',
    component: MidelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MidelPageRoutingModule {}
