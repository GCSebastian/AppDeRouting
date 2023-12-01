import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MidelPageRoutingModule } from './midel-routing.module';

import { MidelPage } from './midel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MidelPageRoutingModule
  ],
  declarations: [MidelPage]
})
export class MidelPageModule {}
