import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogFunctionsService } from '../service/blog-functions.service'
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  public blogform: FormGroup;
  email:string="";
  constructor(public blogService: BlogFunctionsService, 
    public formBuilder: FormBuilder,
    public router: Router,
    private auth: AngularFireAuth
    ) {
      this.blogform = this.formBuilder.group({
        author:[''],
        title:[''],
        description:[''],
        body:['']
      })
     }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }
    this.auth.user.subscribe((user)=>{
      this.email=user.email;
    });
    
  }
  onSubmit(){
    this.blogform.value.author=this.email;
    console.log(this.blogform.value);
    this.blogService.createBlog(this.blogform.value);
    this.router.navigate(['blogs']);

  }
}
