import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  cat: any
  constructor(public navCtrl: NavController,
    private event: Events,
    public navParams: NavParams) {
    this.cat = this.navParams.get('cat')

  }

  ionViewWillEnter() {
  }
  
  ionViewWillLeave() {
    this.event.publish('showFabBtn')
  }

  getCat() {
    if (this.cat == 'car') {
      return 'Car'
    } else if (this.cat == 'mobile') {
      return 'Mobile'
    } else if (this.cat == 'id') {
      return 'ID'
    }
  }


}
