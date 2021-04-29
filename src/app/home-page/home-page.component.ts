import {Component, OnInit} from '@angular/core';
<<<<<<< HEAD
import {JwtService} from '../service/jwt.service';
import {User} from '../interface/user';
import {UserToken} from '../interface/user-token';
import {UserService} from '../service/user.service';
=======
import {HouseService} from '../service/house.service';
import {House} from '../interface/house';
>>>>>>> 3bac2a75493204228195351cfc662ae4b007cc7e

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

<<<<<<< HEAD
  // @ts-ignore
  userToken: UserToken;

  constructor(private jwt: JwtService,
              private user: UserService) {
=======
  listHouse: House[] = [];

  constructor(private houseService: HouseService) {
    this.getAllHouse();
>>>>>>> 3bac2a75493204228195351cfc662ae4b007cc7e
  }

  ngOnInit(): void {
    console.log(this.jwt.currentUserValue);
    console.log('123');
  }

  getUserToken(): UserToken {
    return this.jwt.currentUserValue;
  }

<<<<<<< HEAD
  hasUserToken(): boolean {
    if (this.getUserToken() != null){
      this.userToken = this.getUserToken();
      return true;

    }else {
      return false;
    }
  }
=======
  getAllHouse(): House[] {
    this.houseService.getAllHouse().subscribe(houses => {
      this.listHouse = houses;
    });
    return this.listHouse;
  }

>>>>>>> 3bac2a75493204228195351cfc662ae4b007cc7e
}
