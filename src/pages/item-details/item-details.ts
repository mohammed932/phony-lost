import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
  item: any = this.navParams.get('item')
  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams) {
  }


  ChooseContactWay() {
    let actionSheet = this.actionSheetCtrl.create({
      title: `
        <div class="phone-txt">رقم الموبيل</div>
        <div class="phone-number">01028734848</div>
      `,
      buttons: [
        {
          text: 'Call',
          role: 'destructive',
          handler: () => {
            console.log('Call');
          }
        },
        {
          text: 'Send Message',
          role: 'destructive',
          handler: () => {
            console.log('Send Message');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}

