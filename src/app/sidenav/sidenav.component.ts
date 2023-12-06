import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  opened=false;
  closed=false;
  // opened = false;
  currentButton: string | null = null;

  handleButtonClick(buttonType: string) {
    this.currentButton = buttonType;
  }



}
