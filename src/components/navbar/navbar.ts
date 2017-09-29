import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the NavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {
  public pages: Array<{titulo:string, component:any, icon:string}>;
  header_data:any;
  constructor(public nav: NavController) {
    
    this.header_data={ismenu:true,ishome:false,title:"Home"};
    this.pages = [
      { titulo: 'Inicio', component: "HomePage", icon: 'home' },
      { titulo: 'Listar Simulados', component: "ListarsimuladosPage", icon: 'list' },
      { titulo: 'Sair', component: 'exit', icon: 'exit' }
    ];
   
  }
  goToPage(page) {
    if (page == "exit") {
      localStorage.clear();
      this.nav.setRoot('LoginPage');
      this.nav.popToRoot();
    } else {
      this.nav.setRoot(page.toString());
    }
  }
}
