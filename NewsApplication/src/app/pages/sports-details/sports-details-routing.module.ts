import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsDetailsPage } from './sports-details.page';

const routes: Routes = [
  {
    path: '',
    component: SportsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsDetailsPageRoutingModule {}
