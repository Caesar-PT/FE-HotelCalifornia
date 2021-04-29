import {Component, OnInit} from '@angular/core';
import {User} from '../../interface/user';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {UserService} from '../../service/user.service';

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
  updateUser(id: number) {
    this.userService.updateUser(this.user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
