import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsDetailsPageRoutingModule } from './sports-details-routing.module';

import { SportsDetailsPage } from './sports-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsDetailsPageRoutingModule
  ],
  declarations: [SportsDetailsPage]
})
export class SportsDetailsPageModule {}
