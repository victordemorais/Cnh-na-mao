import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { ToastController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  responseData: any;
  userData = {"usuario":"","senha":"","email":"","nome":"","cpf":"","genero":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
  public authservice: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
  Voltar(){
    this.navCtrl.pop();
  }
  Cadastrar(){
    if(this.userData.usuario && this.userData.senha && this.userData.nome && this.userData.email && this.userData.senha && this.userData.cpf && this.userData.genero){
      this.authservice.postData(this.userData,"cadastro").then((result)=>{
        this.responseData = result;
        console.log(this.responseData);
        if(this.responseData.token){
          localStorage.setItem('token',JSON.stringify(this.responseData));
          this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        }else{
          this.presentToast("Erro ao cadastrar usuário favor tente novamente.");
        }
      },(err)=>{
        //Conexão Falhada
        console.log("Erro ao conectar com o banco de dados");
      });
    }else{
      this.presentToast("Favor inserir os dados para cadastro.");
    }
  }
  presentToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position:'top'
    });
    toast.present();
  }
}
