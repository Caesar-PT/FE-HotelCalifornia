import {Component, OnInit} from '@angular/core';
import {OrderHouse} from '../../interface/order-house';
import {OrderService} from '../../service/order.service';
import {UserService} from '../../service/user.service';
import {User} from '../../interface/user';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  listOrder: OrderHouse[] = [];
  currentUser: User | undefined;

  constructor(private orderHouseService: OrderService,
              private userService: UserService) {
    this.getAllOrderHouse();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getAllOrderHouse() {
    this.userService.getCurrentUser().subscribe( currentUser => {
      this.currentUser = currentUser;
      if (this.currentUser?.id != null) {
        this.orderHouseService.getAllMyOrder(this.currentUser?.id).subscribe(listOrder => {
          this.listOrder = listOrder;
        });
      }
    });
  }
}
