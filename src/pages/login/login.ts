import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any = {}
  constructor(public navCtrl: NavController,
    private event: Events,
    private viewCtrl: ViewController,
    public navParams: NavParams) {
  }

  login() {
    localStorage.setItem('isLogin', JSON.stringify(true))
    this.event.publish('LoginSuccess')
    this.viewCtrl.dismiss()
  }


  dismiss() {
    this.viewCtrl.dismiss()
  }

}
