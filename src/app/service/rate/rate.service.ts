import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rate} from '../../interface/rate';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(private httpClient: HttpClient) { }

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
