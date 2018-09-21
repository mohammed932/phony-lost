import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class SettingsProvider {
  URL: string = 'https://phonylost.azurewebsites.net/api/'
  constructor(public http: HttpClient,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController) {

  }


  showError(errors) {
    let text = ""
    for (let key in errors) {
      if (errors.hasOwnProperty(key)) {
        console.log(key + " -> " + errors[key])
        text += errors[key] + "<br><br>"
      }
    }
    this.showAlert(text)
  }

  async showAlert(text) {
    this.alertCtrl.create({
      // title: 'خطأ',
      subTitle: text,
      buttons: ['موافق']
    }).present();
  }


  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
