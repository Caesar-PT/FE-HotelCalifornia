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
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  range: FormGroup;
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
  cost = 0;
  numberNights = 0;

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

    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getHouseById(id: number) {
    this.houseService.getHouseById(id).subscribe(house => {
      this.house = house;
      console.log('house',this.house);
    });
  }

  // tslint:disable-next-line:typedef
  getAllPhotoByIdHouse(id: number) {
    this.photoService.getALlPhotoByIdHouse(id).subscribe(photos => {
      this.photos = photos;
      console.log(this.photos);
    });
  }

  createOrderHouse(): void {
    this.orderHouseService.createOder(this.order, this.id).subscribe(() => {
      this.router.navigate(['/house']);
    });
  }

  getALlHouseStatus(): void {
    this.houseService.getAllStatus().subscribe(listStatus => {
      this.listHouseStatus = listStatus;
    });
  }

  createOrder(): void {
    this.orderHouseService.createOder(this.order, this.id).subscribe(() => {
      console.log('abcdef');
      this.router.navigate(['/house-detail/' + this.id]).then(() => {
        window.location.reload();
      });
    });
  }

  // tslint:disable-next-line:typedef
  getNumberDay() {
    const checkin = new Date(this.range.value.start);
    const checkout = new Date(this.range.value.end);
    const DAY = 86400 * 1000;
    this.numberNights = Math.round((checkout.getTime() - checkin.getTime()) / DAY);
    return this.numberNights;
  }

  // tslint:disable-next-line:typedef
  onChange() {
    this.cost = this.house.priceByDay * this.getNumberDay();
  }

  // tslint:disable-next-line:typedef
  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    console.log(dateRangeStart.value);
    console.log(dateRangeEnd.value);
  }

  detail(house?: any){
    this.router.navigateByUrl('/booking-house/' + this.house.id);
  }

}
