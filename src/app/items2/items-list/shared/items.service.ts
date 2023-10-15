import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { } from '@angular/fire/compat/firestore';
import { child, get, getDatabase, onValue, push, ref, set, update } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private postCollection = 'posts';
  pageSize = 10;

  private basePath: string = "/items2";
  constructor(private db: AngularFireDatabase) {
    // tutRef.remove();
  }
  tutorial: AngularFireObject<any> | null = null;

 getData() {
   const db2 = getDatabase();
   const reference = ref(db2, 'posts/' + 'NcJ6Ar3t3DS51S45Epu' + '/text')
  console.log(reference)
 }
 getData2() {
   const db2 = getDatabase();
   const reference = ref(db2, 'posts/' + 'NcJ6Ar3t3DS51S45Epu' + '/text')
  console.log()
 }
 readData() {
   const dbRef = ref(getDatabase());
   const postId = 'NcJ6Ar3t3DS51S45Epu'
   let query = get(child(dbRef, `posts/${postId}`)).then((snapshot) => {
    if (snapshot.exists()){
      console.log(snapshot.val())
    }else{
      console.log("no data")
    }
   }).catch((error) => {
    console.error(error);
   });
   console.log("query is " + query)
  }
  getPosts(startAtKey?: string | null): Observable<any[]> {
    let query = this.db.list(this.postCollection, ref => ref.orderByChild('timestamp').limitToLast(this.pageSize + 1));
    if (startAtKey) {
      // query = query.startAt(startAtKey);
    }
    return query.valueChanges();
  }

   readDataOnce() {
    const db = getDatabase()
    const auth = getAuth();
    const postId = 'NcJ6Ar3t3DS51S45Epu'
    return onValue(ref(db, '/users/' + postId), (snapshot) => {
    const username = (snapshot.val() && snapshot.val().content) || 'Anonymous';
   }, {
    onlyOnce: true
  });

 }
  writeUserData(userId: string, pass: string) {
    const db2 = getDatabase();
    set(ref(db2, 'users/' + userId), {
      username: userId,
      password: pass
    });

  }
  writeNewPost(postForm: any) {
    const db = getDatabase();

    const newPostKey = push(child(ref(db), 'posts')).key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    let updates: any = {};
    if(newPostKey) {
      updates['/posts/' + newPostKey] = postForm;
      updates['/user-posts/' + postForm.title + '/' + newPostKey] = postForm;
    }
    console.log(postForm)
    return update(ref(db), updates);
  }
}