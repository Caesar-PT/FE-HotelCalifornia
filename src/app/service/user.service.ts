import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../interface/user';
import {JwtService} from './jwt.service';
import {catchError, tap} from "rxjs/operators";
const URL_BACKEND = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(URL_BACKEND + '/user/signup', user);
  }

  getAllUser(): Observable<User[]> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get<User[]>(URL_BACKEND + '/user');
  }

  updateUser(user: User): Observable<User> {

    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.put<User>(URL_BACKEND + '/user/update', user, {headers});
  }


  resetPassword(user: User): Observable<User> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.put<User>(URL_BACKEND + '/user/resetPassword', user, {headers});
  }


  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(URL_BACKEND + '/user/' + `${id}`)


  };
  getUserById1(id: number) {
  return this.httpClient.get(URL_BACKEND + '/user/' + `${id}`).pipe(
    tap(
      user => JSON.stringify(user)),
    catchError(err => of([]))
  );
}


  getCurrentUser() {
    return this.getUserById(this.jwt.currentUserValue.id);
  }

  constructor(private httpClient: HttpClient,
              private jwt: JwtService) {
  }
}
