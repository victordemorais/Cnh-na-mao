import { LoadingProvider } from './../../providers/loading/loading';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http } from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-simulado',
  templateUrl: 'simulado.html',
})
export class SimuladoPage {
  @ViewChild(Slides) slides: Slides;

  public detalheusuarios: any;
  public responseData: any;
  public dataSet: any;
  public respostas: any;
  public tipo: any;
  public simulados: any;
  userPostData = { "user_id": "", "token": "" };
  respostasusuario = [];
  constructor(public navCtrl: NavController, public authservice: AuthServiceProvider, public http: Http, public navParams:NavParams, public loading:LoadingProvider) {

    
    const data = JSON.parse(localStorage.getItem('token'));
    this.detalheusuarios = data.token;
    this.userPostData.user_id = this.detalheusuarios.user_id;
    this.userPostData.token = this.detalheusuarios.token;
    this.tipo = this.navParams.get("tipo");
    this.getSimulado();
  }
 
  getSimulado() {
   
    
    this.loading.carregando();
    this.authservice.postData(this.userPostData, "simulado/"+this.tipo).then((result) => {
      this.responseData = result;
      if (this.responseData.simulado) {
        this.loading.carregado();
        this.dataSet = this.responseData.simulado;
        this.respostas = this.responseData.respostas;
        this.simulados = this.responseData.simulados;
        
         //console.log(this.responseData);
      } else {
        console.log("Erro");
      }
    }, (err) => {
      //Conection failed Message
      console.log("error em alguma coisa que eu n]ão sei");
    });
  }

  resultado(teste) {

    this.respostasusuario.push(teste);
    // for(var i = 0;i<this.respostasusuario.length;i++) {
    //  console.log(this.respostasusuario[i]);
    // }
    this.navCtrl.push('ResultadoPage', { "respostasusuario": this.respostasusuario, "respostas": this.respostas, "perguntas": this.dataSet , "simulados": this.simulados});
  }


  public showPrevious(): void {
    this.slides.lockSwipes(false);
    this.slides.slidePrev(500);
    this.slides.lockSwipes(true);
  }

  public showNext(teste): void {
    this.respostasusuario.push(teste);
    this.slides.lockSwipes(false);
    this.slides.slideNext(500);
    this.slides.lockSwipes(true);
  }

}
