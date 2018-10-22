import { SettingsProvider } from './../../providers/settings/settings';
import { ItemsProvider } from './../../providers/items/items';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController, App, AlertController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  Cars: any[] = []
  Mobiles: any[] = []
  Cards: any[] = []
  isLogin: boolean = false
  loading: any
  data: any = {
    status: 0
  }
  constructor(public navCtrl: NavController,
    private event: Events,
    private app: App,
    private loadingCtrl: LoadingController,
    private settingService: SettingsProvider,
    private alertCtrl: AlertController,
    private itemService: ItemsProvider,
    private modalCtrl: ModalController,
    public navParams: NavParams) {
    this.checkEvents()
    this.getUserItems()
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
    this.Mobiles.length = 0
    this.Cars.length = 0
    this.Cards.length = 0
    this.itemService.getUserItems().subscribe(data => {
      console.log("my items : ", data);
      data.forEach(item => {
        if (item.itemType == 'mobile') {
          this.Mobiles.push(item)
        } else if (item.itemType == 'car') {
          this.Cars.push(item)
        } else if (item.itemType == 'card') {
          this.Cards.push(item)
        }
      })
    })
  }


  addItem(name) {
    let cat: any = { name: name }
    if (name == 'car') {
      cat.id = 'e633a8d1-4662-49a4-b8ab-093b44d4670d'
    } else if (name == 'mobile') {
      cat.id = 'ed551702-81a0-4e16-b8f5-fb37e49fad65'
    } else if (name == 'card') {
      cat.id = '12276a20-1b2d-4816-8c81-d1d13ce92615'
    }
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
    if (status._value) {
      let params = { ItemId: item.id }
      console.log("a6a66a6 : ", params);

      this.itemService.setItemAsLost(params).subscribe(data => {
        console.log("return data : ", data);
      })
    } else {
      console.log("false");
    }

  }


  openItem(item, cat) {
    this.navCtrl.push('AddItemPage', { item: item, cat: cat })
  }

}
