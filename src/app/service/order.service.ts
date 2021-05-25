import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderHouse} from '../interface/order-house';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OderService {

  constructor(private httpClient: HttpClient) { }

  createOder(oderHouse: OrderHouse, id: number): Observable<OrderHouse>{
    return this.httpClient.post<OrderHouse>('http://localhost:8080/house/view/' + id + '/booking', oderHouse);
  }

  getAllOrderByHouse(id: number): Observable<OrderHouse[]> {
    return this.httpClient.get<OrderHouse[]>('http://localhost:8080/order/house/' + id);
  }

  delOrder(id: number): Observable<OrderHouse> {
    return this.httpClient.delete<OrderHouse>('http://localhost:8080/order/delete/' + id);
  }
}
