import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  Cars: any[] = []
  Mobiles: any[] = []
  IDS: any[] = []
  isLogin: boolean = false
  constructor(public navCtrl: NavController,
    private event: Events,
    private modalCtrl: ModalController,
    public navParams: NavParams) {
    this.checkEvents()
    for (let i = 0; i < 1; i++) {
      this.Cars.push(i)
    }
    for (let i = 0; i < 2; i++) {
      this.Mobiles.push(i)
    }
    for (let i = 0; i < 2; i++) {
      this.IDS.push(i)
    }
  }


  checkEvents() {
    this.event.subscribe('LoginSuccess', () => {
      this.isLogin = true
    })
  }

  ionViewWillEnter() {
    // this.isLogin = JSON.parse(localStorage.getItem('isLogin'))
  }


  addItem(cat) {
    this.event.publish('hideFabBtn')
    this.navCtrl.push('AddItemPage', { cat })
  }

  ionViewWillLeave() {
    this.event.publish('profileFire')
  }

  login() {
    console.log("ddd");
    let modal = this.modalCtrl.create('LoginPage')
    modal.present()
  }

}
