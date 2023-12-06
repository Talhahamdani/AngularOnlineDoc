import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  apiUrl='https://api.unsplash.com/photos';
  accessKey='Cnb5mY8oFIO-q2WvkCpfyKzZqEPPMe5zLOjQ2PiMuM8';

  constructor(private http:HttpClient ) {}
  getPhoto(perPage: number = 1000)
  {
    const url = `${this.apiUrl}?client_id=${this.accessKey}&per_page=${perPage}`;
    return this.http.get<any[]>(url);
  }


}
