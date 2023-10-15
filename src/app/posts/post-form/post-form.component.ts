import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  postForm: FormGroup;
  posts: any[] = [];
  lastPostKey: string | null = null;

  constructor(private fb: FormBuilder, private postService: PostService) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.loadPosts();
  }
  loadPosts() {
    this.postService.getPosts(this.lastPostKey).subscribe(posts => {
      this.posts = posts.slice(0, this.postService.pageSize);
      this.lastPostKey = posts.length > this.postService.pageSize ? posts[this.postService.pageSize].$key : null;
    });
  }
  onNextPage() {
    this.loadPosts();
  }

  onPreviousPage() {
    // To implement previous page logic
  }

  onSubmit() {
    if (this.postForm.valid) {
      const post = this.postForm.value;
      this.postService.createPost(post)
        .then(() => {
          console.log('Post created successfully.');
          this.postForm.reset();
        })
        .catch(error => {
          console.error('Error creating post:', error);
        });
    } else {
      console.warn('Please fill in both title and content.');
    }
  }
}
