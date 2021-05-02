import {Component, OnInit} from '@angular/core';
import {House} from '../../interface/house';
import {ActivatedRoute, Router} from '@angular/router';
import {HouseService} from '../../service/house.service';
import {ExtractI18nCommand} from '@angular/cli/commands/extract-i18n-impl';
import {IComment} from '../../interface/comment';

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
listCmt: IComment[] =[];

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

  commentHouse() {

  }
}
