import { SettingsProvider } from './../settings/settings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemsProvider {

  constructor(public http: HttpClient , private settingService : SettingsProvider) {

  }


  addItem(params): Observable<any> {
    let url = `${this.settingService.URL}Items/AddItem`
    return this.http.post(url, JSON.stringify(params));
  }


}
