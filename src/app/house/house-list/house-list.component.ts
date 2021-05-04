import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../service/house.service';
import {House} from '../../interface/house';
import {Photo} from '../../interface/photo';
import {PhotoService} from '../../service/photo/photo.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  listHouse: House[] = [];
  photos: Photo[] = [];

  constructor(private houseService: HouseService,
              private photoService: PhotoService) {
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
