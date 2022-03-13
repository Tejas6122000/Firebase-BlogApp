import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:string="";
  password:string="";
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  register(){
    if (this.email=="" || this.password=="") {
      alert('Please Enter all the details');
      return
    }
    this.auth.register(this.email,this.password);
    this.email="";
    this.password="";
  }

}
