import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

    email: string = '';
    password: string = '';
  
    constructor(private afAuth: AngularFireAuth) {}
  
    register() {
      let emailElement = document.getElementById('email') as HTMLInputElement
      this.email = emailElement.value
      let passwordElement = document.getElementById('password') as HTMLInputElement
      this.password = passwordElement.value
      console.log(document.getElementById('email')!.innerText)
      console.log(document.getElementById('password')!.innerText)
      console.log(`email: ${this.email} | password: ${this.password} `)
      // console.log('registering ' + JSON.stringify(this.afAuth.authState))
      if (this.email.length > 1 && this.password.length > 1) {
        console.log('email and password good')
        this.afAuth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Account created successfully
            console.log('Account created!', userCredential);
          })
          .catch((error) => {
            // Handle registration errors
            console.error('Registration failed:', error);
          });
      }
    }
  
}
