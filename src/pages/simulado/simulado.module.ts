import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimuladoPage } from './simulado';

@NgModule({
  
  declarations: [
    SimuladoPage
  ],
  imports: [
    IonicPageModule.forChild(SimuladoPage),ComponentsModule
  ],
})
export class SimuladoPageModule {}
