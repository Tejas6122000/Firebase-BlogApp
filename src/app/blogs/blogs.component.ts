import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Blog } from '../blog.model';
import { BlogFunctionsService } from '../service/blog-functions.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Blog[];
  blogDisplay:Blog[];
  email: string;
  constructor(
        private auth: AngularFireAuth,
        private blogService: BlogFunctionsService,
        ){}
  getAll(){
    this.blogDisplay= this.blogs;
    }
  getOwn(){
    this.blogDisplay = this.blogs.filter(blog=> blog.author==this.email);
  }


  ngOnInit(){
    this.blogService.getBlogList().subscribe(res=>{
      this.blogDisplay =this.blogs = res.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as{}
        } as Blog;
      })
    });

    this.auth.user.subscribe((user)=>{
      this.email=user.email;
    });


  }      
  
  removeBlog(blog){
      this.blogService.deleteBlog(blog);
  }

  

}  
// export class BlogsComponent implements OnInit {
//   email: string="";
//   private blogsCollection: AngularFirestoreCollection<Blog>;
//   blogs: Observable<Blog[]>;

//   constructor(
//     private auth: AngularFireAuth,
//     private blogService: BlogFunctionsService,
//     private afs: AngularFirestore
//     ) { 
//     this.blogsCollection = afs.collection<Blog>('blog-collection');
//     this.blogs = this.blogsCollection.valueChanges();
//     }

//   ngOnInit(): void {
   
//     this.auth.user.subscribe((user)=>{
//       this.email=user.email;
//     });
//   }

//   removeBlog(blog){
//     this.blogService.deleteBlog(blog);
//   }

// }
