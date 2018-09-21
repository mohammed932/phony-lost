import { ItemsProvider } from './../../providers/items/items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  cat: any
  data: any = {}
  constructor(public navCtrl: NavController,
    private event: Events,
    private itemService: ItemsProvider,
    public navParams: NavParams) {
    console.log("hey")
    this.cat = this.navParams.get('cat')

  }

  ionViewWillEnter() {
  }

  ionViewWillLeave() {
    // this.event.publish('showFabBtn')
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


  addItem() {
    console.log("data : ",this.data);
    this.data.userId = 'fe296355-cf30-40c0-bfdf-983f792d47ff'
    this.data.itemType = 'mobile'
    this.itemService.addItem(this.data).subscribe(data => {
        console.log("data : ",data);
    })
  }


}
