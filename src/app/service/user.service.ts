import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interface/user';

const URL_BACKEND = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(user: User): Observable<User> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.post<User>(URL_BACKEND + '/user/signup', user,{headers});
  }

  getAllUser(): Observable<User[]> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get<User[]>(URL_BACKEND + '/user',{headers});
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
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get<User>(URL_BACKEND + '/user/' + `${id}`,{headers});
  }
  constructor(private httpClient: HttpClient) {
  }
}
