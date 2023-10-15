import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {
    // firebase.initializeApp(environment.firebaseConfig);
  }

  // Add methods to interact with Firebase services (e.g., authentication, Firestore, etc.)
}
