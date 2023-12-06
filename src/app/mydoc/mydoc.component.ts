import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mydoc',
  templateUrl: './mydoc.component.html',
  styleUrls: ['./mydoc.component.css']
})
export class MydocComponent {
  constructor(private router: Router) {}

  navigateToTab(tab: string) {
    this.router.navigate(['/my-doc', { tab }]);
  }

}
