import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'TabsPage';

  constructor(platform: Platform,
    statusBar: StatusBar,
    private keyboard: Keyboard,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.keyboard.hideKeyboardAccessoryBar(false)
    });
  }
}

