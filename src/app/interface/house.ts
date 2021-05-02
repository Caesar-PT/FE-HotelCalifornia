import {HouseType} from './house-type';
import {HouseStatus} from './house-status';
import {Village} from './village';
import {Photo} from './photo';
import {User} from './user';

export interface House {
  id: number;
  name?: string;
  bedRoom?: number;
  bathRoom?: number;
  description?: string;
  priceByDay?: number;
  houseType: HouseType;
  houseStatus: HouseStatus;
  village?: Village;
  appUser?: User;
  photo?: Photo[];
  avatar?: string;
}
