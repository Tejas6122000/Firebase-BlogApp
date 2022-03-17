import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  login(email: string,password: string){
    this.afAuth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['/blogs']);
    },err=>{
      alert('Something Went Wrong');
      this.router.navigate(['/login']);
    })
  }

  register(email:string,password:string){
    this.afAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Registeration Successful');
      this.router.navigate(['/login']);
    },err=>{
      alert('Something Went Wrong');
      this.router.navigate(['/regsiter']);
    })
  }

  logout(){
    this.afAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err=>{
      alert('Something Went Wrong');
    })
  }

  // async googleSign() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   const credential = await this.auth.signInWithPopup(provider);
  //   return 
  // }

  // googleSignIn(){
  //   return this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  //   .then((res)=>{

  //     this.router.navigate(['/blogs'])
  //     localStorage.setItem('token','true');
  //   },err=>{
  //     alert(err.message);
  //   })
  //   }
  async  googleSign(){
    await  this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    this.router.navigate(['admin/list']);
}


}
