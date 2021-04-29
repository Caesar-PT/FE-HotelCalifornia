import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {HouseListComponent} from './house/house-list/house-list.component';
import {LoginRegisterComponent} from './user/login-register/login-register.component';
import {CreateHouseComponent} from './house/create-house/create-house.component';
import {MyProfileComponent} from './user/my-profile/my-profile.component';
import {ChangePasswordComponent} from './user/change-password/change-password.component';
import {HouseDetailComponent} from './house/house-detail/house-detail.component';
import {UploadFileComponent} from './upload-file/upload-file.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'house',
    component: HouseListComponent
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent
  },
  {
    path: 'create-house',
    component: CreateHouseComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },
  {
    path: 'house-detail',
    component: HouseDetailComponent
  },
  {
    path: 'upload-file',
    component: UploadFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
