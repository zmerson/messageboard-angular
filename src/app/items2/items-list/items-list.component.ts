import { Component } from '@angular/core';
import { getDatabase, ref, set, onValue } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ItemsService } from './shared/items.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {

  postForm: FormGroup;
  posts: any[] = [];
  lastPostKey: string | null = null;

  userForm: FormGroup;
  userName: string = ''; 
  password: string = '';

  constructor( private fb: FormBuilder, private fb2: FormBuilder, private itemService: ItemsService ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
    this.userForm = this.fb2.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onNextPage() {
    this.getItems();
  }
  click() {
    console.log(`posts: ${this.posts}`)
  }
  onPreviousPage() {
    // To implement previous page logic
  }
  ngOnInit() {
    this.getItems();
}
  getItems(){
    // this.itemService.getData()
    let isloggedin = AuthService.isLoggedin()
    this.itemService.getPosts()
    .subscribe((posts: any[]) => {
      this.posts = posts.slice(0, this.itemService.pageSize);
      this.lastPostKey = posts.length > this.itemService.pageSize ? posts[this.itemService.pageSize].$key : null;
    });
  }
  onSubmit(){
    if (this.postForm.valid) {
      const post = this.postForm.value;
      this.itemService.getData()
    }
  }
  onSubmit2(){
    console.log('pushed button')
    console.log(this.postForm)
    if (this.postForm.valid){
      this.itemService.writeNewPost(this.postForm)
        .then(() => {
          console.log('post submitted')
        })
    }
  }
}
