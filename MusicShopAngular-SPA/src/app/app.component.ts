import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { FormControl, NgForm, Validators, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicShopAngular-SPA';


  constructor(private authService: AuthService) {}

  
  
}
