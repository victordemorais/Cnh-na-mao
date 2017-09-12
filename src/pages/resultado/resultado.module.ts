import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadoPage } from './resultado';

@NgModule({
 
  declarations: [
    ResultadoPage
  ],
  imports: [
    IonicPageModule.forChild(ResultadoPage),ComponentsModule
  ],
})
export class ResultadoPageModule {}
