import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarsimuladosPage } from './listarsimulados';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    ListarsimuladosPage
  ],
  imports: [
    IonicPageModule.forChild(ListarsimuladosPage),ComponentsModule
  ],
})
export class ListarsimuladosPageModule {}
