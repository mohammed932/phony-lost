import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any = {}
  constructor(public navCtrl: NavController,
    private event: Events,
    public navParams: NavParams) {
  }

  login() {
    localStorage.setItem('isLogin', JSON.stringify(true))
    this.navCtrl.push('ProfilePage').then(() => {
      this.event.publish('LoginSuccess')
    })
  }

}
