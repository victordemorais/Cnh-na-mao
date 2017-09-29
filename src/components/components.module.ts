import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
@NgModule({
	declarations: [NavbarComponent],
	imports: [IonicModule],
	exports: [NavbarComponent]
	
})
export class ComponentsModule {}
