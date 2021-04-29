import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../interface/house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient: HttpClient) { }

  getAllHouse(): Observable<House[]> {
    return this.httpClient.get<House[]>('http://localhost:8080/house');
  }

  createHouse(house: House): Observable<House> {
    return this.httpClient.post<House>('http://localhost:8080/house/create', house);
  }
}
