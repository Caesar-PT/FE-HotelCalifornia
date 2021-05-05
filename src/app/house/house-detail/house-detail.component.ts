import {Component, OnInit} from '@angular/core';
import {House} from '../../interface/house';
import {HouseService} from '../../service/house.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Photo} from '../../interface/photo';
import {PhotoService} from '../../service/photo/photo.service';
import {OrderHouse} from '../../interface/order-house';
import {OderService} from '../../service/oder.service';
import {HouseStatus} from '../../interface/house-status';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  sub: Subscription | undefined;
  // @ts-ignore
  order: OrderHouse;
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

  constructor(private houseService: HouseService,
              private activeRoute: ActivatedRoute,
              private photoService: PhotoService,
              private orderHouseService: OderService,
              private router: Router) {
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getHouseById(this.id);
      this.getAllPhotoByIdHouse(this.id);
    });
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
    });
  }

  createOrderHouse(): void {
    this.orderHouseService.createOder(this.order, this.id).subscribe(() => {
      this.router.navigate(['/house']);
    });
  }

  getImageUrls(imageUrls: string[]): any {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < imageUrls.length; i++) {
      this.photo.src = imageUrls[i];
      this.photo.house = this.house;
      this.photoService.createPhoto(this.photo).subscribe( photo => {
        this.photo = photo;
      });
    }
  }

  changeHouseStatus(): void {
    this.houseService.updateHouse(this.id, this.house).subscribe( () => {
      this.router.navigate(['/house-detail/' + this.id]).then(() => {
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
