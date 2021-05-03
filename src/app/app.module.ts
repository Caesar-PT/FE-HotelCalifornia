import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDALMl1rB7AXegtUfcsDaDwH52X11aA05g",
      authDomain: "pro1-54433.firebaseapp.com",
      databaseURL: "https://pro1-54433-default-rtdb.firebaseio.com",
      projectId: "pro1-54433",
      storageBucket: "pro1-54433.appspot.com",
      messagingSenderId: "641249356313",
      appId: "1:641249356313:web:a75fe071896e0934779888",
      measurementId: "G-8NES4NHE9X"
    }),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
