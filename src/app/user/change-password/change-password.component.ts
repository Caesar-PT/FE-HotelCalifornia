import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../interface/user';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  // @ts-ignore
  sub: Subscription;

  user: User = {
    role: {
      id: 0,
      name: '',
    },
    id: 0,
    fullName: '',
    username: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: ''
  };


  constructor(private router: Router,
              private userService: UserService,
              private activatedRouter: ActivatedRoute,
  ) {
    this.sub = this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) => {
        this.user.id = Number(paraMap.get('id'));
        this.getUserById(this.user.id);
      }
    );
  }


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  private getUserById(id: number) {
    this.userService.getUserById(id).subscribe(a => {
      this.user = a;
    });
  }

  // tslint:disable-next-line:typedef
  resetPassword(id: number) {
    this.userService.resetPassword(this.user).subscribe(() => {

    });
    alert('Đổi mật khẩu thành công');
    this.router.navigate(['/']);

  }

}
