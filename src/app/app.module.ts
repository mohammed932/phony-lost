import { globalInterceptor } from './../providers/global-headers/global-headers';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { ItemsProvider } from '../providers/items/items';
import { SettingsProvider } from '../providers/settings/settings';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserProvider } from '../providers/user/user';
import { Keyboard } from '@ionic-native/keyboard';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: globalInterceptor,
      multi: true
    },
    ItemsProvider,
    SettingsProvider,
    UserProvider,
    Keyboard
  ]
})
export class AppModule { }
