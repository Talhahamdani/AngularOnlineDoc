import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from "rxjs";


@Component({
  selector: 'app-mydoc',
  templateUrl: './mydoc.component.html',
  styleUrls: ['./mydoc.component.css']
})
export class MydocComponent {
  // constructor(private router: Router) {}
  //
  // navigateToTab(tab: string) {
  //   this.router.navigate(['/my-doc', { tab }]);
  // }

  currentRoute: string;
  private currentButton: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }

  handleButtonClick(button: string): void {
    // Handle button click
    this.currentButton = button;
  }

  getTabIndex(): number {
    if (this.currentRoute.includes('/my-doc/timeline')) {
      return 0;
    } else if (this.currentRoute.includes('/my-doc/tasks')) {
      return 1;
    } else if (this.currentRoute.includes('/my-doc/calendars')) {
      return 2;
    } else if (this.currentRoute.includes('/my-doc/contacts')) {
      return 3;
    } else {
      return 0; // Default to the first tab if the route doesn't match
    }
  }
}
