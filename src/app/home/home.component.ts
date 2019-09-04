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
  x;
  y;
  z;
  posts:any[];
  constructor(private msg : SmsService, private snackBar: MatSnackBar ) {      
  }
  send(a , b , c){
    this.x = a;
    this.y = b;
    this.z = c;
    this.msg.sendmsg(this.x , this.y , this.z).subscribe(
    response => console.log(response));

  }
  mysnackBar() {
    this.snackBar.open(this.message = 'Thanks for Feedback', this.action = '', {
      duration: 2500 ,

    });
  }

  ngOnInit() {
  }

}
