import { Component, OnInit } from '@angular/core';
import { SmsService } from '../sms.service';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
post :any[];
message: string;
  action: string;
  constructor(private msg : SmsService, private snackBar: MatSnackBar ) { 
    this.msg.geturl().subscribe(
      response => {
        this.post
      });
     
  }
  mysnackBar() {
    this.snackBar.open(this.message = 'Thanks for Feedback', this.action = '', {
      duration: 2500 ,

    });
  }

  ngOnInit() {
  }

}
