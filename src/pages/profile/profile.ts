import { ApiProvider } from './../../providers/api/api';
import { SettingsProvider } from './../../providers/settings/settings';
import { ItemsProvider } from './../../providers/items/items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController, App, AlertController, LoadingController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  Items: any
  isLogin: boolean = false
  Types: any
  isLoading: boolean = true
  loading: any
  data: any = {
    status: 0
  }
  isMarketPlace = this.navParams.get('isMarketPlace')
  constructor(public navCtrl: NavController,
    private event: Events,
    private app: App,
    private api: ApiProvider,
    private loadingCtrl: LoadingController,
    private viewCtrl: ViewController,
    private settingService: SettingsProvider,
    private alertCtrl: AlertController,
    private itemService: ItemsProvider,
    private modalCtrl: ModalController,
    public navParams: NavParams) {
    this.checkEvents()
    this.getItemsType()
  }


  checkEvents() {
    this.event.subscribe('LoginSuccess', () => {
      this.isLogin = true
    })
    this.event.subscribe('itemAdded', () => {
      this.getUserItems()
    })

  }


  ionViewWillEnter() {
    this.isLogin = JSON.parse(localStorage.getItem('isLogin'))
  }

  getUserItems() {
    this.itemService.getUserItems().subscribe(data => {
      console.log("my items : ", data);
      this.Items = data
    })
  }


  addItem(cat) {
    this.navCtrl.push('AddItemPage', { cat })
  }


  login() {
    let modal = this.modalCtrl.create('LoginPage')
    modal.present()
  }

  ConfirmDeleteItem(item, index) {
    let alert = this.alertCtrl.create({
      title: 'confirm delete',
      message: 'Do you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteItem(item, index)
          }
        }
      ]
    });
    alert.present();
  }

  deleteItem(item, index) {
    this.presendLoading()
    console.log("item : ", item);
    let params = {
      itemId: item.id
    }
    this.itemService.deleteItem(params).subscribe(data => {
      console.log('data delete : ', data);
      this.loading.dismiss()
      this.settingService.presentToast('item deleted successfully !')
      this.getUserItems()
    }, err => {
      this.loading.dismiss()
    })
  }


  presendLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  changeItemLostStatus(status, item) {
    console.log(status);
    console.log('item : ', item);
    if (status._value) {
      let params = { ItemId: item.id , StatusName : 'Lost'}
      this.itemService.setItemAsLost(params).subscribe(data => {
        console.log("return data : ", data);
      })
    } else {
      console.log("false");
    }

  }


  openItem(item) {
    console.log('itemitemitem : ',item);
    // this.navCtrl.push('AddItemPage', { item })
  }


  getItemsType() {
    this.api.getItemsType().subscribe(data => {
      this.Types = data
      this.isLoading = false
      this.getUserItems()
    }, err => {
      this.isLoading = false
    })
  }

  getHeaderClass(type) {
    switch (type) {
      case 'Phones':
        return 'card-header-wrapper1'
      case 'Cards':
        return 'card-header-wrapper2'
      case 'Cars':
        return 'card-header-wrapper'
    }
  }


  getSecondHeaderClass(type) {
    switch (type) {
      case 'Phones':
        return 'card-header-second1'
      case 'Cards':
        return 'card-header-second2'
      case 'Cars':
        return 'card-header-second'
    }
  }


  getTypeImg(type) {
    switch (type) {
      case 'Phones':
        return 'assets/imgs/smartphone.svg'
      case 'Cards':
        return 'assets/imgs/id-card.svg'
      case 'Cars':
        return 'assets/imgs/sports-car.svg'
    }

  }


  dismiss() {
    this.viewCtrl.dismiss()
  }


}
