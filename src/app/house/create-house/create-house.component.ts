import { Component, OnInit } from '@angular/core';
import {House} from '../../interface/house';
import {HouseType} from '../../interface/house-type';
import {HouseStatus} from '../../interface/house-status';
import {Village} from '../../interface/village';
import {User} from '../../interface/user';
import {Photo} from '../../interface/photo';
import {HouseService} from '../../service/house.service';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  house: House = {
    id: 0,
    houseStatus: {
      id: 0,
      name: ''
    },
    houseType: {
      id: 0,
      name: ''
    }
  };
  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
  }



}
