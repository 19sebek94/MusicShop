import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  model: any = {};
  

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  matcher = new MyErrorStateMatcher();

  username: string = '';
  password: string = '';

  constructor(public authService: AuthService, private router: Router){}

  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Logged in succesfully');
        // this.alertify.success('Logged in succesfully');
      },
      error => {
        console.log('error');
        // this.alertify.error(error);
      },
      () => {
        // this.router.navigate(['/members']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    // this.authService.currentUser = null;
    // this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

  // onSubmit() {
  //   this.username = this.emailFormControl.value as string;
  //   this.password = this.passwordFormControl.value as string;
    
  //   this.authService.login(this.username, this.password).subscribe(
  //     response => {
  //       // Handle successful login response, e.g., store the token in local storage.
  //       console.log('Login successful. Token:', response.token);
  //     },
  //     error => {
  //       // Handle login error, e.g., display an error message to the user.
  //       console.error('Login failed:', error);
  //     }
  //   );
  // }
}
