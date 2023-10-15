import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password)
      .then(() => {
        // Successful login, navigate to the dashboard or another route
        this.router.navigate(['/dashboard']);
      })
      .catch((error: { message: string; }) => {
        // Handle login error
        this.errorMessage = error.message;
      });
  }
}
