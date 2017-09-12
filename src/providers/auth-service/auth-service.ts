import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = "http://autoeduca.victordemorais.com.br/autoeduca/"
//Let api eu defino qual o local onde ele vai acessar a api e fazer todas as operações para cadastrar no banco de dados e etc.
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
  postData(credenciais, acao) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(apiUrl + acao, JSON.stringify(credenciais), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) =>
          reject(err));
    });
  }
}
