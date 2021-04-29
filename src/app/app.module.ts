import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HouseListComponent } from './house/house-list/house-list.component';
import { LoginRegisterComponent } from './user/login-register/login-register.component';
import { CreateHouseComponent } from './house/create-house/create-house.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
=======
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HouseListComponent} from './house/house-list/house-list.component';
import {LoginRegisterComponent} from './user/login-register/login-register.component';
import {CreateHouseComponent} from './house/create-house/create-house.component';
import {MyProfileComponent} from './user/my-profile/my-profile.component';
import {ChangePasswordComponent} from './user/change-password/change-password.component';
import {HouseDetailComponent} from './house/house-detail/house-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
>>>>>>> 3bac2a75493204228195351cfc662ae4b007cc7e

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HouseListComponent,
    LoginRegisterComponent,
    CreateHouseComponent,
    MyProfileComponent,
    ChangePasswordComponent,
    HouseDetailComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    HttpClientModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

=======
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
>>>>>>> 3bac2a75493204228195351cfc662ae4b007cc7e
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
