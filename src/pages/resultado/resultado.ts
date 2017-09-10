import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {
  public respostas;
  public respostasusuario;
  public perguntas;
  public simulados;
  contador = 0;
  respostascorretas = [];
  respo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.respostas = navParams.get("respostas");
    this.respostasusuario = navParams.get("respostasusuario");
    this.perguntas = navParams.get("perguntas");
    console.log(navParams.get("perguntas"));
    this.simulados = navParams.get("simulados");
    console.log(this.simulados);

  }
  ionViewDidLoad() {
    this.resultado();
  }

  resultado() {
    for (var i = 0; i < this.perguntas.length; i++) {
      if (this.perguntas[i].id_perg == this.simulados[i].id_perg) {
        console.log(this.simulados[i].Respostas.length);
        for (var y = 0; y < this.simulados[i].Respostas.length; y++) {
          if (this.perguntas[i].resposta == this.simulados[i].Respostas[y].respostas && this.simulados[i].Respostas[y].correta == 1) {
            this.contador++;
          }
        }
      }

    }
    if (this.contador > 1) {
      let alert = this.alertCtrl.create({
        title: 'Parabens!!!',
        subTitle: 'Você está acima da média , continue assim . ',
        buttons: ['Ok']

      });
      alert.present();
    } else {
      let alert = this.alertCtrl.create({
        title: 'Você não acertou a quantidade de pontos necessária!!!',
        subTitle: 'Você está acima da média , continue assim . ',
        buttons: ['Ok']
      });
      alert.present();
    }
  }
}
