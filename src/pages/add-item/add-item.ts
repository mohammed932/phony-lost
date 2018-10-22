import { ApiProvider } from './../../providers/api/api';
import { SettingsProvider } from './../../providers/settings/settings';
import { ItemsProvider } from './../../providers/items/items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import * as moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  cat: any
  Brands: any
  Models: any
  Cases: any
  item: any
  waiting: boolean = false
  data: any = {
    lostDate: moment().format("MM/DD/YYYY")
  }
  constructor(public navCtrl: NavController,
    private event: Events,
    private settingService: SettingsProvider,
    private itemService: ItemsProvider,
    private api: ApiProvider,
    public navParams: NavParams) {
    this.cat = this.navParams.get('cat')
    this.item = this.navParams.get('item') //when show item details
    this.getBrands()
    this.getStatus()
    this.checkUpdataItem()
  }

  checkUpdataItem() {

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




  getBrands() {
    this.api.getBrands(this.cat.id).subscribe(data => {
      this.Brands = data
    })
  }

  getStatus() {
    this.api.getStatus().subscribe(data => {
      this.Cases = data
    })
  }

  selectModel(brandId) {
    this.Brands.forEach(item => {
      if (item.id == brandId)
        this.Models = item.deviceModels
    })
  }

  addItem() {
    this.waiting = true
    console.log("data : ", this.data);
    this.data.userId = 'fe296355-cf30-40c0-bfdf-983f792d47ff'
    if (this.cat.name == 'mobile') {
      this.data.ItemTypeId = this.cat.id
    } else if (this.cat.name == 'car') {
      this.data.ItemTypeId = this.cat.id
    } else {
      this.data.ItemTypeId = this.cat.id
    }
    console.log("my data : ", this.data);
    this.itemService.addItem(this.data).subscribe(data => {
      this.event.publish('itemAdded')
      this.settingService.presentToast('item added succeessfully !')
      this.navCtrl.pop()
      console.log("data : ", data);
      this.waiting = false
    }, err => {
      this.waiting = false
    })
  }


  UpdateItem() {
    console.log("update");
  }


}
