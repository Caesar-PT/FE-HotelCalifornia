import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from 'src/app/header/header.component';
import { House } from 'src/app/interface/house';
import { OrderHouse } from 'src/app/interface/order-house';
import { User } from 'src/app/interface/user';
import { HouseService } from 'src/app/service/house.service';
import { OderService } from 'src/app/service/oder.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-booking-house',
  templateUrl: './booking-house.component.html',
  styleUrls: ['./booking-house.component.css']
})
export class BookingHouseComponent implements OnInit {
  house: House | undefined;
  currentUser: User | any;
  orderHouse: OrderHouse | any;
  id = 0;
  sub: Subscription | undefined;

  constructor(private userService: UserService,
    private fb: FormBuilder,
    private detech: ChangeDetectorRef,
    private activeRoute: ActivatedRoute,
    private houseService: HouseService,
    private orderService: OderService
  ) {
    this.sub = this.activeRoute.paramMap.subscribe((param: ParamMap)=>{
      // @ts-ignore
      this.id = +param.get('id');
      this.getHouseById(this.id);
    });

   }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  form = this.fb.group({
    fullName: '',
    email: '',
    phoneNumber: '',
    checkin: '',
    checkout: ''
  })

  orderForm = this.fb.group({
    checkin: ['',],
    checkout: '',
    email: '',
    phoneNumber: '',
  })

  getHouseById(id: number) {
    this.houseService.getHouseById(id).subscribe(house => {
      this.house = house;
      console.log('house',this.house);
    });
  }

  getCurrentUser() {
    this.userService.user$.pipe(filter(u => u !== null),).subscribe((user) => {
      this.currentUser = user;
      console.log('current', this.currentUser);
      this.form.patchValue(this.currentUser);
      this.detech.detectChanges();

    })
  }

  submit() {
    const data = this.form.value;
    data.appUser = this.currentUser;
    data.house = this.house;
    data.houseInformation = JSON.stringify(this.house);
    console.log('data', data);
    this.orderService.createOder(data).subscribe(()=>{
      console.log('success');
      
    })
  }
}