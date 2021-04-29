import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../service/house.service';
import {House} from '../../interface/house';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  listHouse: House[] = [];

  constructor(private houseService: HouseService) {
    this.getAllHouse();
  }

  ngOnInit(): void {
  }

  getAllHouse(): House[] {
    this.houseService.getAllHouse().subscribe((houses) => {
      this.listHouse = houses;
    });
    return this.listHouse;
  }

}
