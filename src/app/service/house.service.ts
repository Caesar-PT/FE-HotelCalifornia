import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../interface/house';
import {IComment} from '../interface/comment';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient: HttpClient) {
  }

  getAllHouse(): Observable<House[]> {
    return this.httpClient.get<House[]>('http://localhost:8080/house');
  }

  createHouse(house: House): Observable<House> {
    return this.httpClient.post<House>('http://localhost:8080/house/create', house);
  }

  detailHouse(id: number): Observable<House> {
    return this.httpClient.get<House>('http://localhost:8080/house/view/' + id);
  }

  getHouseById(id: number): Observable<House> {
    return this.httpClient.get<House>('http://localhost:8080/house/' + `${id}`);
  }

  getCommentsByHouseId(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>('http://localhost:8080/comment/' + id);
    }

  createComment(comment: Partial<Comment>): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/comment/create/' , comment);
  }
}
