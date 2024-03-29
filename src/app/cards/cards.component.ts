import {Component, Input, OnInit, SimpleChange} from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MaterialModule} from "../material/material.module";



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input() myPhoto:any;
  notificationIcon = 'notifications'; //my start icone
  // notificationTooltip = ' Thread Notifications Off';
  showNotification: boolean = true;
  notificationTooltip: string = 'Notification On';
  // id:any;
  height:any;
  wigth:any;
  fname:any;
  name:any;
  username:any;
  constructor(private snackBar: MatSnackBar) {}

  toggleNotification() {
    if (this.notificationIcon === 'notifications') {
      this.notificationIcon = 'cancel';
      this.notificationTooltip = 'Notifications Off';
      this.showSnackBar('Your notification data updated');
      // this.showNotification = !this.showNotification;
    } else {
      this.notificationIcon = 'notifications';
      this.notificationTooltip = 'Notifications On';
      this.showSnackBar('Your notification data updated');

    }
    this.showNotification = !this.showNotification;
  }
  showSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['customsnackbar'],
    });
  }
}


