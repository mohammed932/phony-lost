import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-market-place',
  templateUrl: 'market-place.html',
})
export class MarketPlacePage {
  items: any[] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("jffff");
    
    for (let i = 0; i < 10; i++) {
      this.items.push(i)
    }
  }



}
