import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav:Nav;
  public rootPage:any;
  public pages: Array<{titulo:string, component:any, icon:string}>;

  constructor(
    public storage: Storage,
    platform: Platform, 
    statusBar: StatusBar, 
    public push: Push, 
    splashScreen: SplashScreen,
    ) {
 
      
    this.pages = [
      { titulo: 'Inicio', component: "HomePage", icon: 'home' },
      { titulo: 'Listar Simulados', component: "ListarsimuladosPage", icon: 'list' },
      { titulo: 'Sair', component: 'exit', icon: 'exit' }
    ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      if(localStorage.getItem("token"))
      {
       this.rootPage = "HomePage";
      }else{
        this.rootPage = "LoginPage";
      }
      
      this.pushsetup();
      
    });
  }
  pushsetup() {
    const options: PushOptions = {
      android: {
        senderID: '665303991144',
        sound: true,
        icon: "ic_push",
        iconColor: "#387ef5",
        vibrate: true
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);
    
    pushObject.on('notification').subscribe((notification: any) => {


      if (notification.additionalData.foreground) {
        console.log("Fore");

      } else {
        console.log("back");
      }
    });

    pushObject.on('registration').subscribe((registration: any) => {
      console.log(registration.registrationId);
      this.storage.set('name', registration.registrationId);
    });

    pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
  }
  goToPage(page) {
    if (page == "exit") {
      localStorage.clear();
      this.nav.setRoot('LoginPage');
      this.nav.popToRoot();
    } else {
      this.nav.setRoot(page);
    }
  }
}

