import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../../interface/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }

  getPhotoById(id: number): Observable<Photo> {
    return this.httpClient.get<Photo>('http://localhost:8080/photo/' + id);
  }

  createPhoto(photo: Photo): Observable<Photo> {
    return this.httpClient.post<Photo>('http://localhost:8080/photo/create', photo);
  }

  getALlPhotoByIdHouse(id: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>('http://localhost:8080/photo/list/' + id);
  }
}
