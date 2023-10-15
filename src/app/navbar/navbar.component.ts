import { Component, HostListener } from '@angular/core';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
// import { AuthService } from './auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarOpen = false;
  clickedIn = true;

  constructor(public auth: AngularFireAuth, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SignInModalComponent);
  }
  closeMenu() {
    // if(event.target.className !== 'navbar') {
    this.dialog.closeAll()
    console.log('closed')
    // }
  }
  get isLoggedIn(): boolean {
    return this.auth.authState !== null ? true : false
  }

  get isAdmin(): boolean {
    return true;
    // return this.authService.isAdmin;
  }
@HostListener('click')
clickInside() {
  this.isNavbarOpen = true;
  this.clickedIn = true;
}
@HostListener('document:click')
clickout() {
  if (!this.clickedIn) {
    this.isNavbarOpen = false;
    }
    this.clickedIn = false;
}
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  
  login() {
    console.log("logout")  
  }
  
  logout() {
    // this.authService.logout(); // Replace with your authentication logic
    console.log("logout")
  }
}
