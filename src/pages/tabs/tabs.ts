import { Component, ViewChild } from '@angular/core';
import { Tabs, Tab, Events, NavParams, IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tabIndex = 1
  mustHide: boolean = false
  myTitle = 'Login'
  fabColor = 'fabColorActive';
  tab1Root = 'HomePage';
  tab2Root = 'MarketPlacePage';
  tab3Root = 'ProfilePage'
  constructor(private event: Events,
    private navCtrl: NavController,
    public navParam: NavParams) {

  }

  ionViewWillEnter() {
    this.tabIndex = this.navParam.get('tabIndex')
    this.checkEvents()
    // this.checkLogin()
  }

  checkLogin() {
    if (JSON.parse(localStorage.getItem('isLogin'))) {
      // this.tab3Root = "ProfilePage"
      this.myTitle = 'Profile'
    }
  }
  checkEvents() {
    this.event.subscribe('LoginSuccess', () => {
      console.log("LoginSuccess event notify")
      // this.tab3Root = "ProfilePage"
      this.myTitle = 'Profile'
      this.tabIndex = 2
    })

    this.event.subscribe('hideFabBtn', () => {
      this.mustHide = true
    })

    this.event.subscribe('showFabBtn', () => {
      this.mustHide = false
    })

    this.event.subscribe('profileFire', () => {
      // this.tab3Root = 'ProfilePage'
      this.navCtrl.setRoot('TabsPage', { tabIndex: 0 })
    })
  }

  scan() {
    this.navCtrl.setRoot('TabsPage', { tabIndex: 1 })
  }

  selectTab() {
    let currentTab = this.tabRef.getSelected()
    console.log('currentTab : ', currentTab);
  }

  test() {
    console.log("test");

  }

}
