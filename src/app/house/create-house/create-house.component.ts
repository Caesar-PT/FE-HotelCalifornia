import {Component, OnInit} from '@angular/core';
import {House} from '../../interface/house';
import {HouseService} from '../../service/house.service';
import {Router} from '@angular/router';
import {HouseStatus} from '../../interface/house-status';
import {HouseType} from '../../interface/house-type';
import {AddressService} from '../../service/address/address.service';
import {Province} from '../../interface/province';
import {District} from '../../interface/district';
import {Village} from '../../interface/village';
import {Photo} from '../../interface/photo';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  idProvince = 0;
  idDistrict = 0;
  defaultHouseImage = 'https://www.sanmonjizen.org/images/assets/home.gif';

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
    avatar: 'https://www.sanmonjizen.org/images/assets/home.gif',
    address: '',
    bedRoom: 0,
    bathRoom: 0
  };

  listHouseStatus: HouseStatus[] = [];
  listHouseType: HouseType[] = [];
  imageUrls: string[] = [];
  listProvince: Province[] = [];
  listDistrict: District[] = [];
  listVillage: Village[] = [];
  photo: Photo = {
    src: ''
  };

  constructor(private houseService: HouseService,
              private router: Router,
              private addressService: AddressService,
              private fb: FormBuilder) {
    this.getALlHouseStatus();
    this.getAllHouseType();
    this.getAllProvince();
  }

  ngOnInit(): void {
  }

  createHouse(): void {
    this.houseService.createHouse(this.house).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  getALlHouseStatus(): void {
    this.houseService.getAllStatus().subscribe(listStatus => {
      this.listHouseStatus = listStatus;
    });
  }

  getAllHouseType(): void {
    this.houseService.getAllType().subscribe(listType => {
      this.listHouseType = listType;
    });
  }

  getImageUrls(imageUrls: string[]): any {
    this.house.avatar = imageUrls[0];
    console.log(this.house.avatar);

    // // tslint:disable-next-line:prefer-for-of
    // for (let i = 0; i < imageUrls.length; i++) {
    //   this.photo.src = imageUrls[i];
    //   this.photoService.createPhoto(this.photo).subscribe( photo => {
    //     this.photo = photo;
    //   });
    // }
    // console.log(this.imageUrls);
  }


// -------------- ADDRESS ---------------

  getAllProvince(): void {
    this.addressService.getAllProvince().subscribe(listProvince => {
      this.listProvince = listProvince;
    });
  }

  getAllDistrictByProvince(id: number): void {
    this.addressService.getAllDistrictByProvinceId(id).subscribe(listDistrict => {
      this.listDistrict = listDistrict;
    });
  }

  getAllVillageByDistrictId(id: number): void {
    this.addressService.getAllVillageByDistrictId(id).subscribe(listVillage => {
      this.listVillage = listVillage;
    });
  }

  // tslint:disable-next-line:typedef
  selectChangeHandlerProvince(event: any) {
    this.idProvince = event.target.value;
    this.getAllDistrictByProvince(this.idProvince);
    console.log('province id' + this.idProvince);
  }

  // tslint:disable-next-line:typedef
  selectChangeHandlerDistrict(event: any) {
    this.idDistrict = event.target.value;
    this.getAllVillageByDistrictId(this.idDistrict);
    console.log('district id' + this.idDistrict);
  }
}
