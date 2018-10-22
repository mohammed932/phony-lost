import { SettingsProvider } from './../settings/settings';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient, private settingService: SettingsProvider) {

  }

  getBrands(typeID): Observable<any> {
    let url = `${this.settingService.URL}LookUp/GetBrands?typeID=${typeID}`
    return this.http.get(url);
  }

  getStatus(): Observable<any> {
    let url = `${this.settingService.URL}LookUp/GetStatus`
    return this.http.get(url);
  }

}
