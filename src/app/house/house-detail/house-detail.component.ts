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

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

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

  constructor(private houseService: HouseService, private router: Router, private a: ActivatedRoute) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.a.paramMap.subscribe(paraMap => {
      this.id = Number(paraMap.get('id'));
      this.showAllComment(this.id);
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
}
