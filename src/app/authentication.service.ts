import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {catchError, from, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuth: boolean = false;

  constructor(private  auth:Auth) { }

  login(username:string,password:string){
    return from(signInWithEmailAndPassword(this.auth, username, password)).pipe(
      map((userCredential) => {
        const isAuthenticated = !!userCredential.user;

        // Set isAuth to true if the login is successful
        if (isAuthenticated) {
          this.setAuth(true);
          this.saveUserDataInLocalStorage(userCredential.user);
        }

        return isAuthenticated;
      }),
      catchError((error) => {
        console.error('Login failed:', error);
        return of(false);
      })
    );
  }

  signUp(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));

  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }


  setAuth(isAuth: boolean): void {
    this.isAuth = isAuth;
  }

  private saveUserDataInLocalStorage(user: any): void {
    // Customize this according to the structure of your user data
    const userData = {
      uid: user.uid,
      email: user.email,
      // Add other user properties as needed
    };

    // Save user data in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
