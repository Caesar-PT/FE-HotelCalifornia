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
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RateandcommentComponent } from './house/rateandcomment/rateandcomment.component';

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
    HeaderComponent,
    RateandcommentComponent,
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
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
