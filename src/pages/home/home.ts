import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  isActive: boolean = false
  data: any = {}
  cat: any = 'mobile'
  Cats: any[] = [
    { img: 'assets/imgs/sports-car.svg', type: 'car', isActive: false },
    { img: 'assets/imgs/smartphone.svg', type: 'mobile', isActive: true },
    { img: 'assets/imgs/id-card.svg', type: 'card', isActive: false }
  ]
  constructor(public navCtrl: NavController,
    private event: Events,
    public navParams: NavParams) {
    console.log("cats:", this.Cats);

  }


  Search(code) {
    // this.event.publish('hideFabBtn')
    let search = {
      itemCode: code,
      cat: this.cat
    }
    this.navCtrl.push('ResultPage', { search })
  }


  selectCategory(index, cat) {
    console.log('cat : ', cat);

    this.cat = cat
    for (let i = 0; i < this.Cats.length; i++) {
      if (i == index) {
        this.Cats[i].isActive = true
      }
      else {
        this.Cats[i].isActive = false
      }
    }
  }

}
