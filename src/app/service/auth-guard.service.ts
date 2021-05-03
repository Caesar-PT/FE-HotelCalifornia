import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {JwtService} from './jwt.service';
import {UserToken} from '../interface/user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  currentUser!: UserToken;

  constructor(
    private router: Router,
    private jwtService: JwtService
  ) {
    this.jwtService.currentUser.subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }

  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentUser) {
      return true;
    } else {
      this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}
