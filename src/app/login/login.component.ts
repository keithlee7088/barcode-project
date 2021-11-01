import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  errorMsg: string = "";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  Login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    if ((this.username.toUpperCase() === "TEST" && this.password === "1234") || (this.username.toUpperCase() === "DION" && this.password === "5678")) {
      this.router.navigate(['/barcode']);
    } else {
      this.loginForm.get('password')?.setValue('');
      this.errorMsg = "Invalid user code/pin no.!";
    }

  }

}
