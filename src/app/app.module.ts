import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { UploadFileComponent } from './upload-file/upload-file.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginRegisterComponent} from './user/login-register/login-register.component';
import {ChangePasswordComponent} from './user/change-password/change-password.component';
import {CreateHouseComponent} from './house/create-house/create-house.component';
import {MyProfileComponent} from './user/my-profile/my-profile.component';
import {HouseDetailComponent} from './house/house-detail/house-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {HouseListComponent} from './house/house-list/house-list.component';
import { CommentComponent } from './house/comment/comment.component';

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
    UploadFileComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
