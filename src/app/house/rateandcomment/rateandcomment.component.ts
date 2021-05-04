import {Component, OnInit} from '@angular/core';
import {IComment} from '../../interface/comment';
import {Rate} from '../../interface/rate';
import {HouseService} from '../../service/house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentPost} from '../../interface/comment-post';
import {RatePost} from '../../interface/rate-post';
import {CommentService} from '../../service/comment/comment.service';
import {RateService} from '../../service/rate/rate.service';
import {House} from '../../interface/house';

@Component({
  selector: 'app-rateandcomment',
  templateUrl: './rateandcomment.component.html',
  styleUrls: ['./rateandcomment.component.css']
})
export class RateandcommentComponent implements OnInit {
  rateChecked!: number;
  rateGuest = 0;
  isGuest: boolean | undefined;

  id = 0;

  listCmt: IComment[] = [];
  listRate: Rate[] = [];
  comment: Partial<IComment> = {
    comment: '',
  };
  rate: Partial<Rate> = {
    star: 0
  };

  house: House = {
    name: '',
    houseStatus: {
      id: 0,
      name: ''
    },
    houseType: {
      id: 0,
      name: ''
    },
    description: '',
    priceByDay: 0,
    village: {
      id: 0,
      name: '',
      district: {
        id: 0,
        name: '',
        province: {
          id: 0,
          name: ''
        }
      }
    },
    avatar: '',
    address: '',
    bedRoom: 0,
    bathRoom: 0
  };

  constructor(private houseService: HouseService,
              private router: Router,
              private a: ActivatedRoute,
              private commentService: CommentService,
              private rateService: RateService) {
  }

  ngOnInit(): void {
    this.a.paramMap.subscribe(paraMap => {
      this.id = Number(paraMap.get('id'));
      this.showAllComment(this.id);
      this.showAllRate(this.id);
      this.rateService.getRateByHouseId(this.id).subscribe(data => {
        this.listRate = data;
        this.rateChecked = this.rateService.checkRates(this.listRate);
      });
      this.houseService.getHouseById(this.id).subscribe(result => {
        this.house = result;
      });
    });
  }

  // tslint:disable-next-line:typedef
  showAllComment(id: number) {
    this.commentService.getCommentsByHouseId(id).subscribe(b => {
      this.listCmt = b;
    });
  }

  // tslint:disable-next-line:typedef
  createCommentHouse() {
    const commentPost: CommentPost = {
      id: 0,
      houseId: this.house.id,
      comment: this.comment.comment
    };
    this.comment.house = this.house;
    this.commentService.createComment(commentPost).subscribe(next => {
      this.commentService.getCommentsByHouseId(this.id).subscribe(next1 => {
          this.listCmt = next1;
        },
      );
      this.comment = {
        comment: ''
      };
    });
  }

  // tslint:disable-next-line:typedef
  showAllRate(id: number) {
    this.rateService.getRateByHouseId(id).subscribe(b => {
      this.listRate = b;
    });
  }

  // tslint:disable-next-line:typedef
  createRateHouse() {
    const ratePost: RatePost = {
      id: 0,
      houseId: this.house.id,
      star: this.rate.star
    };
    this.rate.house = this.house;
    this.rateService.createRate(ratePost).subscribe(next => {
      this.rateService.getRateByHouseId(this.id).subscribe(next1 => {
          this.listRate = next1;
          this.rateChecked = this.rateService.checkRates(this.listRate);
        },
      );
      this.rate = {
        star: 0
      };
    });
  }

  // tslint:disable-next-line:typedef
  createRate(i: number) {
    console.log(i);
    this.rate.house = this.house;
    this.rate.star = i;
    this.rateService.createRate(this.rate).subscribe(next => {
        this.rateService.getRateByHouseId(this.id).subscribe(data => {
          this.listRate = data;
          this.rateChecked = this.rateService.checkRates(this.listRate);
        });
      }
    );
  }


}
