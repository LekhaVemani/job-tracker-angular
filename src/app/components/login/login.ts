import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ IMPORTANT

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ IMPORTANT (fixes ngClass)
  templateUrl: './login.html'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  // 👁 Toggle password
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // 🔐 Password validation
  isValidPassword(password: string): boolean {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).+$/;
    return pattern.test(password);
  }

  // 🔑 Login
  login() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    // First time
    if (!savedEmail && !savedPassword) {

      if (!this.isValidPassword(this.password)) {
        alert('Password must contain uppercase, lowercase, and special character');
        return;
      }

      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      alert('Account created successfully');
    }

    // Login
    else if (savedEmail === this.email && savedPassword === this.password) {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = '/';
    } else {
      alert('Invalid email or password');
    }
  }

  // 🔁 Forgot password
  forgotPassword() {
    const enteredEmail = prompt('Enter your registered email');
    const savedEmail = localStorage.getItem('email');

    if (enteredEmail === savedEmail) {
      const newPassword = prompt('Enter new password');

      if (newPassword && this.isValidPassword(newPassword)) {
        localStorage.setItem('password', newPassword);
        alert('Password reset successful');
      } else {
        alert('Password must follow rules');
      }
    } else {
      alert('Email not found');
    }
  }
}