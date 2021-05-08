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
  indexPagination: number = 1;
  totalPagination!: number;
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
      this.commentService.getCommentsByHouseId(this.id, 0).subscribe((data: IComment[]) => {
        this.listCmt = data;
        this.rateService.getRateByHouseId(this.id).subscribe(data => {
          this.listRate = data;
          this.rateChecked = this.rateService.checkRates(this.listRate);
        });
        this.houseService.getHouseById(this.id).subscribe(result => {
          this.house = result;
        });
      });
    });

  }

  showAllComment(id: number, index: number) {
    this.commentService.getCommentsByHouseId(id, 0).subscribe(b => {
      this.listCmt = b;
    });
  }

  findPaginnation() {
    this.commentService.getCommentsByHouseId(this.id, (this.indexPagination * 5) - 5).subscribe((data: IComment[]) => {
      this.listCmt = data;
    });
  }

  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }

  firtPage() {
    this.indexPagination = 1;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.commentService.getCommentsByHouseId(this.id, (this.indexPagination * 5) - 5).subscribe((data: IComment[]) => {
      this.listCmt = data;
    });
  }

  prviousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination == 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.commentService.getCommentsByHouseId(this.id, (this.indexPagination * 5) - 5).subscribe((data: IComment[]) => {
        this.listCmt = data;
      });
    }
  }

  lastPage() {
    this.indexPagination = this.listCmt.length / 5;
    this.commentService.getCommentsByHouseId(this.id, (this.indexPagination * 5) - 5).subscribe((data: IComment[]) => {
      this.listCmt = data;
    });
  }


  createCommentHouse() {
    const commentPost: CommentPost = {
      id: 0,
      houseId: this.house.id,
      comment: this.comment.comment
    };
    this.comment.house = this.house;
    this.commentService.createComment(commentPost).subscribe(next => {
      this.commentService.getCommentsByHouseId(this.id, 0).subscribe(next1 => {
          this.listCmt = next1;
        },
      );
      this.comment = {
        comment: ''
      };
    });
  }

  showAllRate(id: number) {
    this.rateService.getRateByHouseId(id).subscribe(b => {
      this.listRate = b;
    });
  }

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
