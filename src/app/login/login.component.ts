import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string
  email: string="";
  password:string="";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.router.navigate(['/blogs']);
    }
  }

  login(){
    if (this.email=="" || this.password=="") {
      alert('Please Enter all the details');
      return
    }
    this.auth.login(this.email,this.password);
    this.email="";
    this.password="";
  }

  signInWithGoogle(){
    this.auth.googleSign();
  }

}
