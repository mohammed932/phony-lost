import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private event: Events,
    public navParams: NavParams) {
  }


  Search() {
    this.event.publish('hideFabBtn')
    this.navCtrl.push('ResultPage')
  }



}
