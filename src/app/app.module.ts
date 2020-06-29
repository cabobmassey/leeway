import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { SplashComponent } from './splash/splash.component';
import { HeaderComponent } from './header/header.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HeaderComponent,
    UserHomeComponent,
    ApartmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    RouterModule.forRoot([
      {
        path: '',
        component: SplashComponent
      },
      {
        path: 'home',
        component: UserHomeComponent
      },
      {
        path: 'apartment-details',
        component: ApartmentDetailsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
