import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../interface/user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  // @ts-ignore
  sub: Subscription;
  user: User = {

    id: 0,
    fullName: '',
    username: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    role: {
      id: 0,
      name: '',
    }
  };

  constructor(private router: Router,
              private userService: UserService) {
    this.getCurrentUser();
  }

  ngOnInit(): void {

  }

  getCurrentUser(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  // tslint:disable-next-line:typedef
  updateUser(id: number) {
    this.userService.updateUser(this.user).subscribe(() => {
      alert('Đổi thông tin thành công');
      this.router.navigate(['/']);
    });
  }
}
