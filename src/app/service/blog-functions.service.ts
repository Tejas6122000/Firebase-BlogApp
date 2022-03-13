import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestore } from '@angular/fire/firestore'
import { Blog } from '../blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogFunctionsService {

  constructor(private fs: AngularFirestore) { }

  getBlogList(){
    return this.fs
    .collection('blog-collection')
    .snapshotChanges();
  }

  createBlog(blog: Blog){
    return new Promise<any>((resolve,reject)=>{
      this.fs
      .collection('blog-collection')
      .add(blog)
      .then(response=>{ console.log(response)},err=>reject(err));
    })
  }

  deleteBlog(blog){
    return this.fs
    .collection('blog-collection')
    .doc(blog.id)
    .delete();
  }

  updateBlog(blog: Blog,id){
    return this.fs
    .collection('blog-collection')
    .doc(id)
    .update({
      title: blog.title,
      description: blog.description,
      body: blog.body,
    });
  }


}
