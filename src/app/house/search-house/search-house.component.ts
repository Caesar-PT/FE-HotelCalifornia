import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { District } from 'src/app/interface/district';
import { House } from 'src/app/interface/house';
import { HouseStatus } from 'src/app/interface/house-status';
import { HouseType } from 'src/app/interface/house-type';
import { Province } from 'src/app/interface/province';
import { Village } from 'src/app/interface/village';
import { HouseService } from 'src/app/service/house.service';

@Component({
  selector: 'app-search-house',
  templateUrl: './search-house.component.html',
  styleUrls: ['./search-house.component.css']
})
export class SearchHouseComponent implements OnInit {
  @Output()
  listChanged: EventEmitter<any> = new EventEmitter<any>();

  listHouse: House[] = [];
  listStatus: HouseStatus[] = [];
  listVillage: Village[] = [];
  listType: HouseType[] = [];
  listDistrict: District[] = [];
  listProvince: Province[] = [];

  houseForm = this.fb.group({
    name: ['',],
    priceMinDay: ['', [Validators.pattern('[0-9]*')]],
    priceMaxDay: ['', [Validators.pattern('[0-9]*')]],
    houseStatus: [''],
    houseType: [''],
    bedRoom: [''],
    bathRoom: [''],
    province: [''],
    district: [''],
    village: [''],
  })
  

  constructor(
    private houseService: HouseService,
    private fb: FormBuilder
    ) {
      this.getListStatus();
      this.getListVillage();
      this.getListDistrict();
      this.getListProvince();
      this.getAllHouseType();
      this.getAllHouseByCondition();
     }

  ngOnInit(): void {
  }

  getAllHouseByCondition(){
    this.houseService.search(this.houseForm.value).subscribe((house)=>{
        this.listHouse = house;
        this.listChanged.emit(this.listHouse);
        console.log("search",this.listHouse);
    })
  }

  getListStatus(){
    this.houseService.getAllStatus().subscribe((houseStatus)=>{
      this.listStatus = houseStatus;
    })
  }

  getListVillage(){
    this.houseService.getAllVillage().subscribe((village)=>{
      this.listVillage = village;
    })
  }

  getListDistrict(){
    this.houseService.getAllDistrict().subscribe((district)=>{
      this.listDistrict = district;
    })
  }

  getListProvince(){
    this.houseService.getAllProvince().subscribe((province)=>{
      this.listProvince = province;
    })
  }

  getAllHouseType(){
    this.houseService.getAllType().subscribe((houseType)=>{
      this.listType = houseType;
    })
  }
}
