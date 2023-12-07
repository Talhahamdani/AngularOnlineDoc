import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private firestore: AngularFirestore) {}

  addUser(userDetails: any){
    return this.firestore.collection('https://console.firebase.google.com/u/0/project/myproject-f814f/authentication/users').add(userDetails);
  }
}
