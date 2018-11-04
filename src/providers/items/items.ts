import { SettingsProvider } from './../settings/settings';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemsProvider {

  constructor(public http: HttpClient, private settingService: SettingsProvider) {

  }


  addItem(params): Observable<any> {
    let url = `${this.settingService.URL}Items/AddItem`
    return this.http.post(url, JSON.stringify(params));
  }


  getUserItems(): Observable<any> {
    let url = `${this.settingService.URL}Items/GetUserItems?userId=fe296355-cf30-40c0-bfdf-983f792d47ff`
    return this.http.get(url);
  }

  deleteItem(params): Observable<any> {
    let url = `${this.settingService.URL}Items/DeleteItem?ItemId=${params.itemId}&userId=fe296355-cf30-40c0-bfdf-983f792d47ff`
    return this.http.delete(url);
  }

  getItemsByCode(itemCode): Observable<any> {
    let url = `${this.settingService.URL}Items/GetLostItemsByCode?ItemCode=${itemCode}`
    return this.http.get(url);
  }

  setItemAsLost(params): Observable<any> {
    params.userId = 'fe296355-cf30-40c0-bfdf-983f792d47ff'
    let url = `${this.settingService.URL}Items/SetItemAsLost?ItemId=${params.ItemId}&userId=${params.userId}&StatusName=${params.StatusName}`
    return this.http.put(url, JSON.stringify(params));
  }
}
