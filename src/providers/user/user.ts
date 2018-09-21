import { SettingsProvider } from './../settings/settings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserProvider {

  constructor(public http: HttpClient, private settingService: SettingsProvider) {
  }

  login(params): Observable<any> {
    let url = `${this.settingService.URL}user/change-data`
    return this.http.post(url, JSON.stringify(params));
  }

  register(params): Observable<any> {
    let url = `${this.settingService.URL}user/change-data`
    return this.http.post(url, JSON.stringify(params));
  }

}
