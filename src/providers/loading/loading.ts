import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingProvider {
  public loader: any;
  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello Loading Provider');
  }

  carregando(){
   this.loader = this.loadingCtrl.create({content: "Carregando ..."})
  this.loader.present();
  }

  carregado(){
  this.loader.dismiss();
  }

}