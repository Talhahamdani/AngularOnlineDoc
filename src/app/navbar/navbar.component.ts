import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showSearch = false;
  searchTerm = '';


  toggleSearch() {
    this.showSearch = !this.showSearch;
    this.searchTerm = ''; // Clear the search term when toggling
  }



}
