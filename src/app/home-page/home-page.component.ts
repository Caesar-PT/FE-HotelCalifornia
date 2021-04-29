import {Component, OnInit} from '@angular/core';
import {HouseService} from '../service/house.service';
import {House} from '../interface/house';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  listHouse: House[] = [];

  constructor(private houseService: HouseService) {
    this.getAllHouse();
  }

  ngOnInit(): void {
  }

  getAllHouse(): House[] {
    this.houseService.getAllHouse().subscribe(houses => {
      this.listHouse = houses;
    });
    return this.listHouse;
  }

}
