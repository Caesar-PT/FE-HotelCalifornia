import { Component, OnInit } from '@angular/core';
import {House} from '../../interface/house';
import {OrderHouse} from '../../interface/order-house';
import {HouseService} from '../../service/house.service';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  listHouse: House[] = [];
  listOrder: OrderHouse[] = [];

  constructor(private houseService: HouseService,
              private orderService: OrderService) {
    this.getAllHouse();
  }

  ngOnInit(): void {
  }

  getAllHouse(): void {
    this.houseService.getAllHouseByCurrentUser().subscribe(listHouse => {
      this.listHouse = listHouse;
      console.log(this.listHouse);
    });
  }

  // tslint:disable-next-line:typedef
  getOrderByHouseId(event: any) {
    return this.orderService.getAllOrderByHouse(event.target.value).subscribe(listOrder => {
      this.listOrder = listOrder;
    });
  }

}
