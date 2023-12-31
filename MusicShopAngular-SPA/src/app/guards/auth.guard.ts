import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard {
    constructor(private authService: AuthService, private router: Router){}
    canActivate(): boolean {
      if (this.authService.loggedIn()) {
        return true;
      }
  
    //   this.alertify.error('You shall not pass!!!');
      this.router.navigate(['/home']);
      return false;
    }
  }