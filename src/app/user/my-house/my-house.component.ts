import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../service/house.service';
import {House} from '../../interface/house';
import {HouseStatus} from '../../interface/house-status';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-house',
  templateUrl: './my-house.component.html',
  styleUrls: ['./my-house.component.css']
})
export class MyHouseComponent implements OnInit {
  houses: House[] = [];
  listStatus: HouseStatus[] = [];
  id = 0;

  constructor(private houseService: HouseService,
              private router: Router) {
    this.getAllHouseByCurrentUser();
    this.getAllStatus();
  }

  ngOnInit(): void {
  }

  getAllHouseByCurrentUser(): void {
    this.houseService.getAllHouseByCurrentUser().subscribe(houses => {
      this.houses = houses;
    });
  }

  getAllStatus(): void {
    this.houseService.getAllStatus().subscribe(listStatus => {
      this.listStatus = listStatus;
    });
  }

  changeHouseStatus(id: number, house: House): void {
    this.houseService.updateHouse(id, house).subscribe(() => {
      this.router.navigate(['/my-house/']).then(() => {
        window.location.reload();
      });
    });
  }

}
