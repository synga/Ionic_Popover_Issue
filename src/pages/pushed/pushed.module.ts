import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushedPage } from './pushed';

@NgModule({
  declarations: [
    PushedPage,
  ],
  imports: [
    IonicPageModule.forChild(PushedPage),
  ],
})
export class PushedPageModule {}
