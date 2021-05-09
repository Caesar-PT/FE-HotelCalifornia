import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderHouse} from '../interface/order-house';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OderService {

  constructor(private httpClient: HttpClient) { }

  createOder(oderHouse: OrderHouse): Observable<OrderHouse>{
    return this.httpClient.post<OrderHouse>('http://localhost:8080/house/bookHouse', oderHouse);
  }
}
