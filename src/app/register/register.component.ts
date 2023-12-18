import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {HotToastService} from "@ngneat/hot-toast";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  signUPForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,private authService:AuthenticationService,private router:Router,private toast:HotToastService) {}
  ngOnInit() {}

  get email()
  {
    return this.signUPForm.get('email')
  }

  get password()
  {
    return this.signUPForm.get('password')
  }

  submit(): void {
    if(!this.signUPForm.valid)
      return;

    const {email ,password}=this.signUPForm.value;
    this.authService.signUp(email,password).pipe(
      this.toast.observe({
        success:'your are Successfully Registered',
        loading:'Adding the User',
        error:({message})=>`${message}`
      })
    ).subscribe(()=>{
      const userData = {
        email: email,
        password:password
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      this.router.navigate(['/login']);
    })
  }

    // if (this.regForm.valid) {
    //   const userDetails = this.regForm.value;
      // console.log(this.regForm)
  //
  //     this.registerService.addUser(userDetails)
  //       .then(() => {
  //         console.log('User registered successfully');
  //         // Handle successful registration (e.g., navigate to another page)
  //       })
  //   }
  //  }
}
