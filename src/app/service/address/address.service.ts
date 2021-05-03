import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Province} from '../../interface/province';
import {District} from '../../interface/district';
import {Village} from '../../interface/village';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProvince(): Observable<Province[]> {
    return this.httpClient.get<Province[]>('http://localhost:8080/address/province');
  }

  getAllDistrictByProvinceId(id: number): Observable<District[]> {
    return this.httpClient.get<District[]>('http://localhost:8080/address/district/' + id);
  }

  getAllVillageByDistrictId(id: number): Observable<Village[]> {
    return this.httpClient.get<Village[]>('http://localhost:8080/address/village/' + id);
  }
}
