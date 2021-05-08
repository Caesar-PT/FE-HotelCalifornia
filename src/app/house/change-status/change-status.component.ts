import { Component, OnInit } from '@angular/core';
import {HouseService} from '../../service/house.service';
import {House} from '../../interface/house';
import {Photo} from '../../interface/photo';
import {HouseStatus} from '../../interface/house-status';
import {PhotoService} from '../../service/photo/photo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent implements OnInit {
  house: House = {
    name: '',
    houseStatus: {
      id: 0,
      name: ''
    },
    houseType: {
      id: 0,
      name: ''
    },
    description: '',
    priceByDay: 0,
    village: {
      id: 0,
      name: '',
      district: {
        id: 0,
        name: '',
        province: {
          id: 0,
          name: ''
        }
      }
    },
    avatar: '',
    address: '',
    bedRoom: 0,
    bathRoom: 0
  };
  id = 0;
  photos: Photo[] = [];
  photo: Photo = {
    src: ''
  };
  listHouseStatus: HouseStatus[] = [];
  sub: Subscription | undefined;

  constructor(private houseService: HouseService,
              private photoService: PhotoService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    });
    this.getHouseById(this.id);
    this.getAllPhotoByIdHouse(this.id);
    this.getALlHouseStatus();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getHouseById(id: number) {
    this.houseService.getHouseById(id).subscribe(house => {
      this.house = house;
    });
  }

  // tslint:disable-next-line:typedef
  getAllPhotoByIdHouse(id: number) {
    this.photoService.getALlPhotoByIdHouse(id).subscribe(photos => {
      this.photos = photos;
      console.log(this.photos);
    });
  }

  getImageUrls(imageUrls: string[]): any {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < imageUrls.length; i++) {
      this.photo.src = imageUrls[i];
      this.photo.house = this.house;
      this.photoService.createPhoto(this.photo).subscribe(photo => {
        this.photo = photo;
      });
    }
  }

  changeHouseStatus(): void {
    this.houseService.updateHouse(this.id, this.house).subscribe(() => {
      this.router.navigate(['/my-house/' + this.id]).then(() => {
        window.location.reload();
      });
    });
  }

  getALlHouseStatus(): void {
    this.houseService.getAllStatus().subscribe(listStatus => {
      this.listHouseStatus = listStatus;
    });
  }
}
