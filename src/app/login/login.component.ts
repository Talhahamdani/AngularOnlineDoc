import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  logForm: FormGroup;

  constructor(private afs:AngularFirestore ,private fb: FormBuilder) { }
  ngOnInit() {
    this.logForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onLogIn(): void {
    // Add login logic here
    console.log('Signing In:', this.logForm.value);
  }
  get email()
  {
    return this.logForm.get('email')
  }

  get password()
  {
    return this.logForm.get('password')
  }
}
