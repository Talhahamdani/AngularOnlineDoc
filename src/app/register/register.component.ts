import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from "@angular/forms";
import {RegisterService} from "../register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm: FormGroup;
  constructor(private fb: FormBuilder,private registerService: RegisterService) {
    this.regForm = this.fb.group({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    });
  }
  // ngOnInit() {
  //   this.regForm = this.fb.group({
  //     email:new FormControl('',[Validators.required]),
  //     password:new FormControl('',[Validators.required]),
  //   });
  // }
  onRegister(): void {
    if (this.regForm.valid) {
      const userDetails = this.regForm.value;
      // console.log(this.regForm)

      this.registerService.addUser(userDetails)
        .then(() => {
          console.log('User registered successfully');
          // Handle successful registration (e.g., navigate to another page)
        })
    }
  }
}
