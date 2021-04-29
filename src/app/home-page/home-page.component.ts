import {Component, OnInit} from '@angular/core';
import {JwtService} from '../service/jwt.service';
import {User} from '../interface/user';
import {UserToken} from '../interface/user-token';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // @ts-ignore
  userToken: UserToken;

  constructor(private jwt: JwtService,
              private user: UserService) {
  }

  ngOnInit(): void {
    console.log(this.jwt.currentUserValue);
    console.log('123');
  }

  getUserToken(): UserToken {
    return this.jwt.currentUserValue;
  }

  hasUserToken(): boolean {
    if (this.getUserToken() != null){
      this.userToken = this.getUserToken();
      return true;

    }else {
      return false;
    }
  }
}
