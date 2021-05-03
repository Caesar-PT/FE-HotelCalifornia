import {Component, OnInit} from '@angular/core';
import {House} from '../../interface/house';
import {ActivatedRoute, Router} from '@angular/router';
import {HouseService} from '../../service/house.service';
import {ExtractI18nCommand} from '@angular/cli/commands/extract-i18n-impl';
import {IComment} from '../../interface/comment';
import {HouseType} from '../../interface/house-type';
import {HouseStatus} from '../../interface/house-status';
import {Village} from '../../interface/village';
import {User} from '../../interface/user';
import {Photo} from '../../interface/photo';
import {Role} from '../../interface/role';
import {CommentPost} from '../../interface/comment-post';
import {Rate} from '../../interface/rate';
import {RatePost} from '../../interface/rate-post';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  rateChecked!: number;
  rateGuest = 0;
  isGuest: boolean | undefined;

  id: number;
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
  listCmt: IComment[] = [];
  listRate: Rate[] = [];
  comment: Partial<IComment> = {
    comment: '',
    house: {
      id: 0,
      name: '',
      bedRoom: 0,
      bathRoom: 0,
      description: '',
      priceByDay: 0,
      houseType: {
        id: 0,
        name: ''
      },
      houseStatus: {
        id: 0,
        name: ''
      },
      village: {
        id: 0,
        district: {
          id: 0,
          province: {
            id: 0,
            name: ''
          },
          name: ''
        },
        name: ''
      },
      appUser: {
        id: 0,
        fullName: '',
        username: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        role: {
          id: 0,
          name: '',
        },
      },
      avatar: '',
    }
  };
  rate: Partial<Rate> = {
    star: 0,
    house: {
      id: 0,
      name: '',
      bedRoom: 0,
      bathRoom: 0,
      description: '',
      priceByDay: 0,
      houseType: {
        id: 0,
        name: ''
      },
      houseStatus: {
        id: 0,
        name: ''
      },
      village: {
        id: 0,
        district: {
          id: 0,
          province: {
            id: 0,
            name: ''
          },
          name: ''
        },
        name: ''
      },
      appUser: {
        id: 0,
        fullName: '',
        username: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        role: {
          id: 0,
          name: '',
        },
      },
      avatar: '',
    }
  };

  constructor(private houseService: HouseService, private router: Router, private a: ActivatedRoute) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.a.paramMap.subscribe(paraMap => {
      this.id = Number(paraMap.get('id'));
      this.showAllComment(this.id);
      this.showAllRate(this.id);
      this.houseService.getRateByHouseId(this.id).subscribe(data => {
        this.listRate = data;
        this.rateChecked = this.houseService.checkRates(this.listRate);
      });
      this.houseService.getHouseById(this.id).subscribe(result => {
        this.house = result;
      });
    });
  }

  detailHouse(id: number) {
    this.houseService.detailHouse(id).subscribe(a => {
      this.house = a;
    });
  }

  showAllComment(id: number) {
    this.houseService.getCommentsByHouseId(id).subscribe(b => {
      this.listCmt = b;
    });
  }

  createCommentHouse() {
    let commentPost: CommentPost = {
      id: 0,
      houseId: this.house.id,
      comment: this.comment.comment
    };
    this.comment.house = this.house;
    this.houseService.createComment(commentPost).subscribe(next => {
      this.houseService.getCommentsByHouseId(this.id).subscribe(next1 => {
          this.listCmt = next1;
        },
      );
      this.comment = {
        comment: '',
        house: {
          id: 0,
          name: '',
          bedRoom: 0,
          bathRoom: 0,
          description: '',
          priceByDay: 0,
          houseType: {
            id: 0,
            name: ''
          },
          houseStatus: {
            id: 0,
            name: ''
          },
          village: {
            id: 0,
            district: {
              id: 0,
              province: {
                id: 0,
                name: ''
              },
              name: ''
            },
            name: ''
          },
          appUser: {
            id: 0,
            fullName: '',
            username: '',
            email: '',
            password: '',
            address: '',
            phoneNumber: '',
            role: {
              id: 0,
              name: '',
            },
          },
          avatar: '',
        }
      };
    });
  }

  showAllRate(id: number) {
    this.houseService.getRateByHouseId(id).subscribe(b => {
      this.listRate = b;
    });
  }

  createRateHouse() {
    let ratePost: RatePost = {
      id: 0,
      houseId: this.house.id,
      star: this.rate.star
    };
    this.rate.house = this.house;
    this.houseService.createRate(ratePost).subscribe(next => {
      this.houseService.getRateByHouseId(this.id).subscribe(next1 => {
          this.listRate = next1;
          this.rateChecked = this.houseService.checkRates(this.listRate);

        },
      );
      this.rate = {
        star: 0,
        house: {
          id: 0,
          name: '',
          bedRoom: 0,
          bathRoom: 0,
          description: '',
          priceByDay: 0,
          houseType: {
            id: 0,
            name: ''
          },
          houseStatus: {
            id: 0,
            name: ''
          },
          village: {
            id: 0,
            district: {
              id: 0,
              province: {
                id: 0,
                name: ''
              },
              name: ''
            },
            name: ''
          },
          appUser: {
            id: 0,
            fullName: '',
            username: '',
            email: '',
            password: '',
            address: '',
            phoneNumber: '',
            role: {
              id: 0,
              name: '',
            },
          },
          avatar: '',
        }
      };
    });
  }

  createRate(i: number) {
    console.log(i);
    this.rate.house = this.house;
    this.rate.star = i;
    this.houseService.createRate(this.rate).subscribe(next => {
        this.houseService.getRateByHouseId(this.id).subscribe(data => {
          this.listRate = data;
          this.rateChecked = this.houseService.checkRates(this.listRate);
        });
      }
    );
  }
}
