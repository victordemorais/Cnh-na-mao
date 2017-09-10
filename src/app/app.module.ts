import {  HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Push } from '@ionic-native/push';
import { IonicStorageModule } from '@ionic/storage';
/* Páginas */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SimuladoPage } from '../pages/simulado/simulado';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ResultadoPage } from '../pages/resultado/resultado';
import { ListarsimuladosPage } from '../pages/listarsimulados/listarsimulados';

/* Providers  */
import { AuthServiceProvider } from './../providers/auth-service/auth-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SimuladoPage,
    LoginPage,
    CadastroPage,
    ResultadoPage,
    ListarsimuladosPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SimuladoPage,
    LoginPage,
    CadastroPage,
    ResultadoPage,
    ListarsimuladosPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    Push
  ]
})
export class AppModule {}
