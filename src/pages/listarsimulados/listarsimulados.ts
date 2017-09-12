import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListarsimuladosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listarsimulados',
  templateUrl: 'listarsimulados.html',
})
export class ListarsimuladosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarsimuladosPage');
  }
  simularprova(prova){
    
    this.navCtrl.push('SimuladoPage',{"tipo":prova});
  }

}
