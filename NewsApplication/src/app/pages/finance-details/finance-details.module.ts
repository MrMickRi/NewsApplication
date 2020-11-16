import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceDetailsPageRoutingModule } from './finance-details-routing.module';

import { FinanceDetailsPage } from './finance-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceDetailsPageRoutingModule
  ],
  declarations: [FinanceDetailsPage]
})
export class FinanceDetailsPageModule {}
