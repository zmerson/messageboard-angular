import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static afAuth: any;
  
  static isLoggedin() {
    if (this.afAuth)
    return this.afAuth.authState;
  }
  constructor(private afAuth: AngularFireAuth) {}
  
  // Log in with email and password
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Log out
  logout() {
    return this.afAuth.signOut();
  }

  // Check if a user is logged in
  public isLoggedIn() {
    return this.afAuth.authState;
  }
}
