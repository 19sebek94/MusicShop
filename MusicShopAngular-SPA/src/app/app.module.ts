import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './components/home/home.component';
import { InstrumentCardComponent } from './components/instrument-card/instrument-card.component';
import {MatCardModule} from '@angular/material/card';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddInstrumentComponent } from './components/add-instrument/add-instrument.component';
import { JwtModule, JwtModuleOptions  } from '@auth0/angular-jwt';
import { InstrumentDetailComponent } from './components/instrument-detail/instrument-detail.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

export function tokenGetter(): string | null {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InstrumentCardComponent,
    UserProfileComponent,
    AddInstrumentComponent,
    InstrumentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatGridListModule,
    ReactiveFormsModule, 
    NgIf, 
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
         tokenGetter: tokenGetter,
         allowedDomains: ['localhost:8010/Auth', 'localhost:8010/Catalog'],
         disallowedRoutes: ['localhost:8010/Catalog/CreateProduct']
      }
   })
  ],
  exports: [MatFormFieldModule],
  providers: [ 
    AuthService,
    AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
