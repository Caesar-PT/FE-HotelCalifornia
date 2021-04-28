import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HouseListComponent } from './house/house-list/house-list.component';
import { LoginRegisterComponent } from './user/login-register/login-register.component';
import { CreateHouseComponent } from './house/create-house/create-house.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HouseListComponent,
    LoginRegisterComponent,
    CreateHouseComponent,
    MyProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
