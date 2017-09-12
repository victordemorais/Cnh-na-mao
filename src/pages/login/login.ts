import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private storage;
  responseData : any;
  name:any
  userData = {"usuario":"","senha":"", "token_push":""}
  constructor(storage: Storage, public navCtrl: NavController, public navParams: NavParams, public authservice: AuthServiceProvider,
  public toastCtrl: ToastController) {
    this.storage = storage;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.storage.get('name').then((name) => {
      this.userData.token_push= name;
    });
  
 
  }
  Cadastrar(){
    this.navCtrl.push('CadastroPage');
  }
  Logar(){
    if(this.userData.usuario && this.userData.senha){
      console.error( this.userData.token_push);
      this.authservice.postData(this.userData,"login").then((result)=>
    {
      this.responseData = result;
      console.log(this.responseData);
      if(this.responseData.token){
        localStorage.setItem('token',JSON.stringify(this.responseData))
      this.navCtrl.setRoot('HomePage', {}, { animate: true, direction: 'forward' });
      }else{
        this.presentToast("Senha ou usuário invalído!");
      }
    },(err)=>{
      console.log("Erro ao conecar com a API");
    });
  }else{
    this.presentToast("Favor inserir os dados");
  }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

  toast.present();
  }
}
