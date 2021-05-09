import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../interface/house';
import {HouseStatus} from '../interface/house-status';
import {HouseType} from '../interface/house-type';
import { Village } from '../interface/village';
import { HouseDTO } from '../interface/house-dto';
import { District } from '../interface/district';
import { Province } from '../interface/province';

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

  getAllStatus(): Observable<HouseStatus[]> {
    return this.httpClient.get<HouseStatus[]>('http://localhost:8080/house/houseStatus');
  }

  getAllType(): Observable<HouseType[]> {
    return this.httpClient.get<HouseType[]>('http://localhost:8080/house/houseType');
  }

  getHouseById(id: number): Observable<House>{
    return this.httpClient.get<House>('http://localhost:8080/house/view/' + id);
  }

  getAllVillage(): Observable<Village[]>{
    return this.httpClient.get<Village[]>('http://localhost:8080/house/village');
  }

  getAllDistrict(): Observable<District[]>{
    return this.httpClient.get<District[]>('http://localhost:8080/house/district');
  }

  getAllProvince(): Observable<Province[]>{
    return this.httpClient.get<Province[]>('http://localhost:8080/house/province');
  }

  search(house: HouseDTO): Observable<[]> {
    return this.httpClient.post<[]>('http://localhost:8080/house/show', house);
  }
}
