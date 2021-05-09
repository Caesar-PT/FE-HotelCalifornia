import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../interface/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User | undefined;

  constructor(private userService: UserService) {
    this.getCurrentUser();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getCurrentUser() {
    this.userService.user$.subscribe((user: any) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

  isCurrentUser(): boolean {
    if (this.currentUser?.fullName == null) {
      return false;
    } else {
      return true;
    }
  }
}
