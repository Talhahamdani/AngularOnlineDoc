import {Component, OnInit} from '@angular/core';
import {UnsplashService} from "../unsplash.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  photos: any[] = [];
  selectedPhoto: any;
  selectedFilter: string = 'All';

  //sharing to child
  loData:any;

  // id:any;
  // height:any;
  // wigth:any;


  constructor(private unsplashService: UnsplashService) {}
  ngOnInit() {
    this.unsplashService.getPhoto(20).subscribe((data)=>{
      this.photos=data;
      // this.selectedPhoto = this.photos.length > 0 ? this.photos[0] : null;
      // this.loData=this.selectedPhoto;
      // console.log(this.selectedPhoto)
      // console.log(this.loData)
      console.log('data',this.photos)
    });
  }



  selectFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
