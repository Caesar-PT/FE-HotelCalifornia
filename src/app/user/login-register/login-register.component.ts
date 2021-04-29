import {Component, OnInit} from '@angular/core';
import {User} from '../../interface/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {JwtService} from '../../service/jwt.service';
import {first} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {Role} from '../../interface/role';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  form: any = {};
  // @ts-ignore
  // @ts-ignore
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
  error = '';
  loading = false;
  submitted = false;
  isLoginFailed = false;
  isSuccess = false;
  errorMessage = false;


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private jwtService: JwtService
  ) {
    console.log(this.jwtService.currentUserValue);

  }

  ngOnInit(): void {
  }


  createNewUser(): void {
    this.user.username = this.form.username;
    this.user.password = this.form.password;
    this.user.address = this.form.address;
    this.user.fullName = this.form.fullName;
    this.user.email = this.form.email;
    this.user.phoneNumber = this.form.phoneNumber;
    console.log(this.user);
    this.userService.createUser(this.user).subscribe(data => {
        alert('Tạo thành công tài khoản');
        this.router.navigate(['/login']);
      },
      error => {
        alert('Tài khoản đã tồn tại!');
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  login() {
    this.submitted = true;
    this.loading = true;
    this.jwtService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('ACCESS_TOKEN', data.token);
          localStorage.setItem('USERNAME', this.loginForm.value.username);
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
          this.isSuccess = true;
        });
  }

}
