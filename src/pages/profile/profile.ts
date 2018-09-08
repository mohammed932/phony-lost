import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  Cars: any[] = []
  Mobiles: any[] = []
  IDS: any[] = []
  constructor(public navCtrl: NavController,
    private event: Events,
    public navParams: NavParams) {
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


  addItem(cat) {
    this.event.publish('hideFabBtn')
    this.navCtrl.push('AddItemPage', { cat })
  }

  ionViewWillLeave() {
    this.event.publish('profileFire')
  }

}
