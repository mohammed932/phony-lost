import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ItemsProvider } from '../../providers/items/items';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  search: any
  Result: any
  constructor(public navCtrl: NavController,
    private event: Events,
    private itemsService: ItemsProvider,
    public navParams: NavParams) {
    this.search = this.navParams.get('search')
    console.log("search : ", this.search);

    this.getItemByCode()
  }


  ionViewWillLeave() {
    this.event.publish('showFabBtn')
  }

  getItemByCode() {
    this.itemsService.getItemsByCode(this.search.itemCode).subscribe(data => {
      console.log("search data : ", data);
      if (data) {
        this.Result = data
      } else {
        console.log("no resul found");
      }

    })
  }

}
