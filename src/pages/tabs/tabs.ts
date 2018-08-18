import { Component, ViewChild } from '@angular/core';
import { Tabs, Tab, Events, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;
  fabColor = 'fabColorActive';
  tab1Root = 'HomePage';
  tab2Root = 'MarketPlacePage';
  tab3Root = 'LoginPage'
  constructor(private event: Events, public navParam: NavParams) {

  }

}
