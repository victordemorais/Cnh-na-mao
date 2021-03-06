import { Component} from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public detalheusuarios:any;
    public responseData:any;
    public dataSet:any;
    public respostas:any;
    userPostData = {"user_id":"","token":""};
    
  constructor( public navCtrl: NavController , public authservice: AuthServiceProvider) {
    const data = JSON.parse(localStorage.getItem('token'));
      this.detalheusuarios = data.token;
      this.userPostData.user_id = this.detalheusuarios.user_id;
      this.userPostData.token=this.detalheusuarios.token;
   
   
  }
  goToPage(pagina){
    this.navCtrl.push(pagina, {}, { animate: true, direction: 'forward' });
  }
 
}
