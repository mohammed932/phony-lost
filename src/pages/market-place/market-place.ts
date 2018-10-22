import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-market-place',
  templateUrl: 'market-place.html',
})
export class MarketPlacePage {
  items: any[] = [
    { id: 1, name: 'iphone-5 good' },
    { id: 2, name: 'samsung good condtion' },
    { id: 3, name: 'audi car' },
    { id: 4, name: 'lancer puma' },
    { id: 5, name: 'hyundi verna' },
    { id: 6, name: 'kia kopi' },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemDetails(item){
   this.navCtrl.push('ItemDetailsPage',{item})
  }


}
