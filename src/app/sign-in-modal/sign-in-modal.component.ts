import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.css']
})
export class SignInModalComponent {
  email: string | undefined;
  password: string | undefined;
  router: any;
  modal: boolean = false;
  constructor(public auth: AngularFireAuth, public dialogRef: MatDialogRef<SignInModalComponent>)  {}
  toggleModal() {
    console.log('true')
    this.modal = true
  }
  async signIn() {
    console.log(`sing in as ${this.email} initiate`)
    console.log(`${this.email} was ${this.auth.authState}`)
    try {
      if (this.email && this.password){
        console.log(`logging in as ${this.email}`)
        await this.auth.signInWithEmailAndPassword(this.email, this.password);
        this.dialogRef.close();
      }
    } catch (error) {
      console.error(error);
    }
  }

  
  goToCreateAccount() {
    // this.router.navigate(['/create-account']);
    this.dialogRef.close();
  }
  dismiss() {
   this.dialogRef.close();
  }
}