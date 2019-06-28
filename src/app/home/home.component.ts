import { Component, OnInit } from '@angular/core';
import { SmsService } from '../sms.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
post :any[];
  constructor(private msg : SmsService) { 
    this.msg.geturl().subscribe(
      response => {
        this.post = response.json();
      });
  }

  ngOnInit() {
  }

}
