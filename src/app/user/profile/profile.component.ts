import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {User} from '../../interface/user';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.userService.getCurrentUser().subscribe(
      response => {
        this.user = <User> response;
        console.log(this.user);
      },
      error => console.error(error)
    );
  }
}
