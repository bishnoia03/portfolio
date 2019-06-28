import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SmsService {
private url: "/https://www.way2sms.com/api/v1/sendCampaign?apikey=8ONPE3BUFRU9B37EYOQEK6DWQJPY84GV&secret=FK7SZF6J8RVMM2CQ&usetype=stage&senderid=aman&phone=8295716429&message=%22hii%20from%20way%20to%20sms%20api%22";
  constructor(private http: HttpClient) {

   }
  geturl(){
    return this.http.get(this.url);
  }
}
