import { Component, ViewChild } from '@angular/core';
import { Tabs, Tab, Events, NavParams, IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  mustHide: boolean = false
  myTitle = 'Login'
  fabColor = 'fabColorActive';
  tab1Root = 'HomePage';
  tab2Root = 'MarketPlacePage';
  tab3Root = 'ProfilePage'
  constructor(private event: Events,
    private navCtrl: NavController,
    public navParam: NavParams) {
      this.checkEvents()
      this.checkLogin()
  }

  ionViewWillEnter() {
    // this.tabIndex = this.navParam.get('tabIndex')
  }

  checkLogin() {
    
    if (JSON.parse(localStorage.getItem('isLogin'))) {
      this.tab3Root = "ProfilePage"
      this.myTitle = 'Profile'
    }
  }
  checkEvents() {
    this.event.subscribe('LoginSuccess', () => {
      console.log("LoginSuccess event notify")
      this.tab3Root = "ProfilePage"
      this.myTitle = 'Profile'
    })

    this.event.subscribe('hideFabBtn', () => {
      this.mustHide = true
    })

    this.event.subscribe('showFabBtn', () => {
      this.mustHide = false
    })

  }

  scan() {
    this.navCtrl.setRoot('TabsPage', { tabIndex: 1 })
  }


  test() {
    console.log("test");
  }

}
