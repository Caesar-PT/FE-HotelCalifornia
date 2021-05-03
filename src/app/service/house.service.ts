import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../interface/house';
import {IComment} from '../interface/comment';
import {Rate} from '../interface/rate';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient: HttpClient) {
  }

  getAllHouse(): Observable<House[]> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get<House[]>('http://localhost:8080/house',{headers});
  }

  createHouse(house: House): Observable<House> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.post<House>('http://localhost:8080/house/create', house,{headers});
  }

  detailHouse(id: number): Observable<House> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get<House>('http://localhost:8080/house/view/' + id,{headers});
  }

  getHouseById(id: number): Observable<House> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get<House>('http://localhost:8080/house/' + `${id}`,{headers});
  }

  getCommentsByHouseId(id: number): Observable<IComment[]> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get<IComment[]>('http://localhost:8080/comment/' + id,{headers});
    }

  createComment(comment: Partial<IComment>): Observable<IComment> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.post<IComment>('http://localhost:8080/comment/create/' , comment,{headers});
  }
  getRateByHouseId(id: number): Observable<Rate[]> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get<Rate[]>('http://localhost:8080/rate/' + id,{headers});
    }

  createRate(comment: Partial<Rate>): Observable<Rate> {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.post<Rate>('http://localhost:8080/rate/create/' , comment,{headers});
  }

  checkRates(rates: Rate[]): number {
    let total = 0;
    for (const rate of rates) {
      total += rate.star;
    }
    return Math.round((total / rates.length) * 100) / 100;
  }
}
