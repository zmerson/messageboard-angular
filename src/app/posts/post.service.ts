import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { startAt } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   private postCollection = 'posts';
  pageSize = 10;

  constructor(private afDatabase: AngularFireDatabase) {}

  getPosts(startAtKey?: string | null): Observable<any[]> {
    let query = this.afDatabase.list(this.postCollection, ref => ref.orderByChild('timestamp').limitToLast(this.pageSize + 1));
    if (startAtKey) {
      // query = query.startAt(startAtKey);
    }
    return query.valueChanges();
  }
  createPost(post: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.afDatabase.list('posts').push(post)
        .then(() => {
          resolve(); // Resolve the promise once the operation is successful
        })
        .catch(error => {
          console.error('Error creating post:', error);
          reject(error); // Reject the promise if there's an error
        });
    });
  }
}
