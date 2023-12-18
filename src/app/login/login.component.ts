import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {HotToastService} from "@ngneat/hot-toast";
import {delay} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,private authService:AuthenticationService,private router:Router,private toast:HotToastService) { }
   ngOnInit() {}

  get email()
  {
    return this.loginForm.get('email')
  }

  get password()
  {
    return this.loginForm.get('password')
  }
  submit(): void {
    if (!this.loginForm.valid)
      return;

    const {email, password} = this.loginForm.value;
    this.authService.login(email, password).pipe(
      // delay(1000),
      // this.toast.observe({
      //   loading: 'Logging in',
      // })
    ).subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.authService.setAuth(true);
        this.router.navigate(['/home']);
        this.toast.success('Logged in Successfully');
      } else {
        // delay(2000)
        // Handle the case where authentication failed
        this.toast.error('User Not Found');
      }
    });
  }
}

